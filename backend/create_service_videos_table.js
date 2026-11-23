/**
 * Run this script once to create the service_videos table in your database.
 * Usage: node create_service_videos_table.js
 */
const db = require('./config/db');

async function migrate() {
  try {
    // Create service_videos table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS service_videos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        service_key VARCHAR(100) NOT NULL,
        title VARCHAR(255) DEFAULT '',
        filename VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_service_key (service_key)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
    `);

    console.log('✅ service_videos table created successfully!');
    console.log('');
    console.log('Your 13 services are mapped to these service keys:');
    console.log('  golf-course         → Golf Course');
    console.log('  bar-restaurant      → Bar & Restaurant');
    console.log('  garden-grounds      → Garden & Ground');
    console.log('  juice-bar           → Juice Bar');
    console.log('  room-service        → Room Service');
    console.log('  coffee-ceremony     → Coffee Ceremony');
    console.log('  fitness-gym         → Fitness & Gym');
    console.log('  conference-room     → VIP Conference Room');
    console.log('  catering-service    → Catering Service');
    console.log('  exhibition-bazaar   → Exhibition & Bazaar');
    console.log('  car-wash            → Car Wash');
    console.log('  children-playground → Children Playground');
    console.log('  others              → Others');

    process.exit(0);
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
  }
}

migrate();
