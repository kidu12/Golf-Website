const db = require('./config/db');

async function check() {
  try {
    const [services] = await db.execute('SELECT id, title FROM services');
    console.log('--- Services ---');
    console.log(services);

    const [videos] = await db.execute('SELECT * FROM service_videos');
    console.log('--- Service Videos ---');
    console.log(videos);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

check();
