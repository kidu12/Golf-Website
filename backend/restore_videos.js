const db = require('./config/db');
const fs = require('fs');
const path = require('path');

async function restoreVideos() {
  try {
    const uploadsDir = path.join(__dirname, 'uploads');
    const files = fs.readdirSync(uploadsDir).filter(f => f.endsWith('.mp4'));
    
    // We will assign one video to each service until we run out of videos
    const [services] = await db.execute('SELECT id FROM services ORDER BY id ASC');
    
    let videoIndex = 0;
    for (const service of services) {
      if (videoIndex >= files.length) break; // no more videos
      const filename = files[videoIndex];
      
      await db.execute(
        'INSERT INTO service_videos (service_id, filename, order_index) VALUES (?, ?, ?)',
        [service.id, filename, 0]
      );
      console.log(`Assigned ${filename} to service_id ${service.id}`);
      videoIndex++;
    }
    
    console.log('Videos restored to database successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Error restoring videos:', err);
    process.exit(1);
  }
}

restoreVideos();
