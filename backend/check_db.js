const db = require('./config/db');

async function check() {
  try {
    const [services] = await db.execute('SELECT id, title FROM services');
    console.log('--- Services in DB ---');
    console.log(JSON.stringify(services, null, 2));
    
    const [videos] = await db.execute('SELECT * FROM service_videos');
    console.log('\n--- Videos in DB ---');
    console.log(JSON.stringify(videos, null, 2));
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

check();
