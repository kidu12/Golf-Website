const db = require('./config/db');

async function fix() {
  try {
    console.log('Dropping existing service_videos table...');
    await db.execute('DROP TABLE IF EXISTS service_videos');

    console.log('Creating service_videos table with correct schema (service_id)...');
    await db.execute(`
      CREATE TABLE service_videos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        service_id INT NOT NULL,
        filename VARCHAR(255) NOT NULL,
        order_index INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_service_id (service_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
    `);

    console.log('✅ Database fix completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error fixing database:', err.message);
    process.exit(1);
  }
}

fix();
