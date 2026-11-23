/**
 * This script seeds the 13 services and creates the service_videos table 
 * with the schema expected by the VideoManagement UI.
 */
const db = require('./config/db');

async function seed() {
  try {
    // 1. Create service_videos table with correct schema
    console.log('Creating service_videos table...');
    await db.execute(`
      CREATE TABLE IF NOT EXISTS service_videos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        service_id INT NOT NULL,
        filename VARCHAR(255) NOT NULL,
        order_index INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_service_id (service_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
    `);

    // 2. Clear and Seed services table
    console.log('Seeding 13 services...');
    const services = [
      'Golf Course',
      'Bar & Restaurant',
      'Garden & Ground',
      'Juice Bar',
      'Room Service',
      'Coffee Ceremony',
      'Fitness & Gym',
      'VIP Conference Room',
      'Catering Service',
      'Exhibition & Bazaar',
      'Car Wash',
      'Children Playground',
      'Others'
    ];

    // Check if they already exist to avoid duplicates
    const [existing] = await db.execute('SELECT title FROM services');
    const existingTitles = existing.map(s => s.title);

    for (const title of services) {
      if (!existingTitles.includes(title)) {
        await db.execute(
          'INSERT INTO services (title, description, image, link) VALUES (?, ?, ?, ?)',
          [title, `High-quality ${title} at the Golf Club.`, 'default.jpg', '#']
        );
        console.log(`+ Added: ${title}`);
      } else {
        console.log(`~ Skipped (exists): ${title}`);
      }
    }

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
    process.exit(1);
  }
}

seed();
