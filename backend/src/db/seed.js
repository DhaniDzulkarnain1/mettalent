require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { pool } = require('./connection');

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    await client.query(`
      DROP TABLE IF EXISTS talent_skills CASCADE;
      DROP TABLE IF EXISTS role_skills CASCADE;
      DROP TABLE IF EXISTS courses CASCADE;
      DROP TABLE IF EXISTS jobs CASCADE;
      DROP TABLE IF EXISTS talents CASCADE;
      DROP TABLE IF EXISTS roles CASCADE;
      DROP TABLE IF EXISTS skills CASCADE;
    `);

    await client.query(`
      CREATE TABLE skills (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL
      );

      CREATE TABLE roles (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      );

      CREATE TABLE role_skills (
        role_id VARCHAR(100) REFERENCES roles(id),
        skill_id VARCHAR(100) REFERENCES skills(id),
        weight INTEGER NOT NULL,
        PRIMARY KEY (role_id, skill_id)
      );

      CREATE TABLE jobs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        location VARCHAR(50) NOT NULL,
        role_id VARCHAR(100) REFERENCES roles(id)
      );

      CREATE TABLE courses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        provider VARCHAR(255) NOT NULL,
        duration VARCHAR(100),
        teaches_skill_id VARCHAR(100) REFERENCES skills(id)
      );

      CREATE TABLE talents (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        education TEXT
      );

      CREATE TABLE talent_skills (
        talent_id VARCHAR(100) REFERENCES talents(id),
        skill_id VARCHAR(100) REFERENCES skills(id),
        proficiency INTEGER NOT NULL,
        PRIMARY KEY (talent_id, skill_id)
      );
    `);

    const seedDir = path.join(__dirname, '../../db/seed');

    const skills = JSON.parse(fs.readFileSync(path.join(seedDir, 'skills.json'), 'utf8'));
    for (const skill of skills) {
      await client.query(
        'INSERT INTO skills (id, name, category) VALUES ($1, $2, $3)',
        [skill.id, skill.name, skill.category]
      );
    }
    console.log(`Loaded ${skills.length} skills`);

    const roles = JSON.parse(fs.readFileSync(path.join(seedDir, 'roles.json'), 'utf8'));
    for (const role of roles) {
      await client.query(
        'INSERT INTO roles (id, name, description) VALUES ($1, $2, $3)',
        [role.id, role.name, role.description]
      );
    }
    console.log(`Loaded ${roles.length} roles`);

    const roleSkills = JSON.parse(fs.readFileSync(path.join(seedDir, 'role_skills.json'), 'utf8'));
    for (const rs of roleSkills) {
      await client.query(
        'INSERT INTO role_skills (role_id, skill_id, weight) VALUES ($1, $2, $3)',
        [rs.roleId, rs.skillId, rs.weight]
      );
    }
    console.log(`Loaded ${roleSkills.length} role_skills`);

    const talents = JSON.parse(fs.readFileSync(path.join(seedDir, 'talents.json'), 'utf8'));
    for (const talent of talents) {
      await client.query(
        'INSERT INTO talents (id, name, education) VALUES ($1, $2, $3)',
        [talent.id, talent.name, talent.education]
      );
    }
    console.log(`Loaded ${talents.length} talents`);

    const talentSkills = JSON.parse(fs.readFileSync(path.join(seedDir, 'talent_skills.json'), 'utf8'));
    for (const ts of talentSkills) {
      await client.query(
        'INSERT INTO talent_skills (talent_id, skill_id, proficiency) VALUES ($1, $2, $3)',
        [ts.talentId, ts.skillId, ts.proficiency]
      );
    }
    console.log(`Loaded ${talentSkills.length} talent_skills`);

    if (fs.existsSync(path.join(seedDir, 'jobs.json'))) {
      const jobs = JSON.parse(fs.readFileSync(path.join(seedDir, 'jobs.json'), 'utf8'));
      for (const job of jobs) {
        await client.query(
          'INSERT INTO jobs (title, company, location, role_id) VALUES ($1, $2, $3, $4)',
          [job.title, job.company, job.location, job.roleId]
        );
      }
      console.log(`Loaded ${jobs.length} jobs`);
    }

    if (fs.existsSync(path.join(seedDir, 'courses.json'))) {
      const courses = JSON.parse(fs.readFileSync(path.join(seedDir, 'courses.json'), 'utf8'));
      for (const course of courses) {
        await client.query(
          'INSERT INTO courses (name, provider, duration, teaches_skill_id) VALUES ($1, $2, $3, $4)',
          [course.name, course.provider, course.duration, course.teachesSkillId]
        );
      }
      console.log(`Loaded ${courses.length} courses`);
    }

    await client.query('COMMIT');
    console.log('Seed complete');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Seed failed:', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
