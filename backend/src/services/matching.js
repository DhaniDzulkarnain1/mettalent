const { pool } = require('../db/connection');

// Cosine similarity calculation
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Get all skills ordered by ID for consistent vector indexing
async function getAllSkills() {
  const result = await pool.query('SELECT id, name FROM skills ORDER BY id');
  return result.rows;
}

// Build skill vector for a talent
async function buildTalentVector(talentId, allSkills) {
  const result = await pool.query(
    'SELECT skill_id, proficiency FROM talent_skills WHERE talent_id = $1',
    [talentId]
  );

  const skillMap = {};
  result.rows.forEach(row => {
    skillMap[row.skill_id] = row.proficiency;
  });

  return allSkills.map(skill => skillMap[skill.id] || 0);
}

// Build skill vector for a role
async function buildRoleVector(roleId, allSkills) {
  const result = await pool.query(
    'SELECT skill_id, weight FROM role_skills WHERE role_id = $1',
    [roleId]
  );

  const skillMap = {};
  result.rows.forEach(row => {
    skillMap[row.skill_id] = row.weight;
  });

  return allSkills.map(skill => skillMap[skill.id] || 0);
}

// Compute gap analysis for a talent vs role
async function computeGap(talentId, roleId) {
  // Get role skills
  const roleSkillsResult = await pool.query(`
    SELECT rs.skill_id, rs.weight, s.name
    FROM role_skills rs
    JOIN skills s ON rs.skill_id = s.id
    WHERE rs.role_id = $1
    ORDER BY rs.weight DESC
  `, [roleId]);

  // Get talent skills
  const talentSkillsResult = await pool.query(`
    SELECT ts.skill_id, ts.proficiency, s.name
    FROM talent_skills ts
    JOIN skills s ON ts.skill_id = s.id
    WHERE ts.talent_id = $1
  `, [talentId]);

  const talentSkillMap = {};
  talentSkillsResult.rows.forEach(row => {
    talentSkillMap[row.skill_id] = {
      proficiency: row.proficiency,
      name: row.name
    };
  });

  let totalWeight = 0;
  let coveredWeight = 0;
  const have = [];
  const gaps = [];

  roleSkillsResult.rows.forEach(roleSkill => {
    totalWeight += roleSkill.weight;

    if (talentSkillMap[roleSkill.skill_id]) {
      coveredWeight += roleSkill.weight;
      have.push({
        skillId: roleSkill.skill_id,
        name: roleSkill.name,
        proficiency: talentSkillMap[roleSkill.skill_id].proficiency
      });
    } else {
      gaps.push({
        skillId: roleSkill.skill_id,
        name: roleSkill.name,
        weight: roleSkill.weight,
        reason: 'Required for role'
      });
    }
  });

  const readiness = totalWeight > 0 ? coveredWeight / totalWeight : 0;
  const topGap = gaps.length > 0 ? gaps[0].name : 'none';

  return {
    readiness: Math.round(readiness * 100) / 100,
    have,
    gaps,
    explanation: `Covers ${have.length}/${roleSkillsResult.rows.length} required skills; largest gap: ${topGap}`
  };
}

// Compute talent matching for a role in a location
async function computeMatch(roleId, location) {
  const allSkills = await getAllSkills();
  const roleVector = await buildRoleVector(roleId, allSkills);

  // Get all talents (filter by location if provided)
  const talentsQuery = location
    ? 'SELECT id, name FROM talents'  // We don't have location in talents table yet, so skip filter
    : 'SELECT id, name FROM talents';

  const talentsResult = await pool.query(talentsQuery);

  // Get role skills for matching analysis
  const roleSkillsResult = await pool.query(`
    SELECT skill_id, weight FROM role_skills WHERE role_id = $1
  `, [roleId]);

  const roleSkillIds = roleSkillsResult.rows.map(rs => rs.skill_id);

  const results = [];

  for (const talent of talentsResult.rows) {
    const talentVector = await buildTalentVector(talent.id, allSkills);
    const score = cosineSimilarity(roleVector, talentVector);

    // Get talent skills
    const talentSkillsResult = await pool.query(`
      SELECT skill_id FROM talent_skills WHERE talent_id = $1
    `, [talent.id]);

    const talentSkillIds = talentSkillsResult.rows.map(ts => ts.skill_id);

    const matchedSkills = [];
    const missingSkills = [];

    for (const roleSkillId of roleSkillIds) {
      const skillName = allSkills.find(s => s.id === roleSkillId)?.name || roleSkillId;

      if (talentSkillIds.includes(roleSkillId)) {
        matchedSkills.push({ skillId: roleSkillId, name: skillName });
      } else {
        missingSkills.push({ skillId: roleSkillId, name: skillName });
      }
    }

    results.push({
      talentId: talent.id,
      name: talent.name,
      score: Math.round(score * 100) / 100,
      matchedSkills,
      missingSkills
    });
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  return results;
}

module.exports = {
  computeGap,
  computeMatch
};
