const db = require('./config/db');

async function reseed() {
  try {
    console.log('Truncating tables...');
    await db.execute('SET FOREIGN_KEY_CHECKS = 0');
    await db.execute('TRUNCATE TABLE service_videos');
    await db.execute('TRUNCATE TABLE services');
    await db.execute('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Seeding Golf Club services...');
    const services = [
      'Golf Course',
      'Bar & Restaurant',
      'Garden & Grounds',
      'Juice Bar',
      'Room Service',
      'Coffee Ceremony',
      'Fitness & Gym',
      'VIP Conference Room',
      'Catering Service',
      'Exhibitions & Bazaars',
      'Car Wash',
      'Childrens Playground',
      'Others'
    ];

    for (const title of services) {
      // Create a sensible link based on title, though Admin doesn't heavily use it
      const link = '/services/' + title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      await db.execute(
        'INSERT INTO services (title, description, image, link) VALUES (?, ?, ?, ?)',
        [title, `High-quality ${title} at the Golf Club.`, 'default.jpg', link]
      );
      console.log(`+ Added: ${title}`);
    }

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error reseeding database:', err);
    process.exit(1);
  }
}

reseed();
