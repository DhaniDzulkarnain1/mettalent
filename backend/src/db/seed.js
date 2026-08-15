require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { pool } = require('./connection');

async function seed() {
  try {
    const seedDir = path.join(__dirname, '../../db/seed');
    const files = fs.readdirSync(seedDir).filter(f => f.endsWith('.json'));

    for (const file of files) {
      const data = JSON.parse(fs.readFileSync(path.join(seedDir, file), 'utf8'));
      console.log(`Loading ${file}...`);
    }

    console.log('Seed complete');
    await pool.end();
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
