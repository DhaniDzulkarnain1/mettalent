import json
import os
from pathlib import Path
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

seed_path = Path(__file__).parent / "seed"

with open(seed_path / "skills.json") as f:
    skills_data = json.load(f)
with open(seed_path / "roles.json") as f:
    roles_data = json.load(f)
with open(seed_path / "role_skills.json") as f:
    role_skills_data = json.load(f)
with open(seed_path / "talents.json") as f:
    talents_data = json.load(f)
with open(seed_path / "talent_skills.json") as f:
    talent_skills_data = json.load(f)

skill_id_map = {s["id"]: s for s in skills_data}
all_skill_ids = [s["id"] for s in skills_data]

def get_talent_by_id(talent_id):
    return next((t for t in talents_data if t["id"] == talent_id), None)

def get_role_by_id(role_id):
    return next((r for r in roles_data if r["id"] == role_id), None)

def get_talent_skills(talent_id):
    return [ts for ts in talent_skills_data if ts["talentId"] == talent_id]

def get_role_skills(role_id):
    return [rs for rs in role_skills_data if rs["roleId"] == role_id]

def build_role_vector(role_id):
    role_skills = get_role_skills(role_id)
    vector = np.zeros(len(all_skill_ids))
    for rs in role_skills:
        idx = all_skill_ids.index(rs["skillId"])
        vector[idx] = rs["weight"]
    return vector

def build_talent_vector(talent_id):
    talent_skills = get_talent_skills(talent_id)
    vector = np.zeros(len(all_skill_ids))
    for ts in talent_skills:
        idx = all_skill_ids.index(ts["skillId"])
        vector[idx] = ts["proficiency"]
    return vector

def compute_gap(talent_id, role_id):
    role_vector = build_role_vector(role_id)
    talent_vector = build_talent_vector(talent_id)

    talent_skills_list = get_talent_skills(talent_id)
    role_skills_list = get_role_skills(role_id)

    total_weight = sum(rs["weight"] for rs in role_skills_list)
    covered_weight = 0

    have = []
    gaps = []

    for rs in role_skills_list:
        skill_id = rs["skillId"]
        weight = rs["weight"]
        talent_skill = next((ts for ts in talent_skills_list if ts["skillId"] == skill_id), None)

        if talent_skill:
            covered_weight += weight
            have.append({
                "skillId": skill_id,
                "name": skill_id_map[skill_id]["name"],
                "proficiency": talent_skill["proficiency"]
            })
        else:
            gaps.append({
                "skillId": skill_id,
                "name": skill_id_map[skill_id]["name"],
                "weight": weight,
                "reason": "Required for role"
            })

    gaps.sort(key=lambda g: g["weight"], reverse=True)

    readiness = covered_weight / total_weight if total_weight > 0 else 0

    covered_count = len(have)
    total_count = len(role_skills_list)
    top_gap = gaps[0]["name"] if gaps else "none"
    explanation = f"Covers {covered_count}/{total_count} required skills; largest gap: {top_gap}"

    return {
        "readiness": round(readiness, 2),
        "have": have,
        "gaps": gaps,
        "explanation": explanation
    }

def compute_match(role_id, location):
    role_vector = build_role_vector(role_id)

    results = []
    for talent in talents_data:
        talent_id = talent["id"]
        talent_vector = build_talent_vector(talent_id)

        role_vec_reshaped = role_vector.reshape(1, -1)
        talent_vec_reshaped = talent_vector.reshape(1, -1)

        if np.all(role_vec_reshaped == 0) or np.all(talent_vec_reshaped == 0):
            score = 0.0
        else:
            score = cosine_similarity(role_vec_reshaped, talent_vec_reshaped)[0][0]

        role_skills_list = get_role_skills(role_id)
        talent_skills_list = get_talent_skills(talent_id)

        matched_skills = []
        missing_skills = []

        for rs in role_skills_list:
            skill_id = rs["skillId"]
            talent_skill = next((ts for ts in talent_skills_list if ts["skillId"] == skill_id), None)

            if talent_skill:
                matched_skills.append({
                    "skillId": skill_id,
                    "name": skill_id_map[skill_id]["name"]
                })
            else:
                missing_skills.append({
                    "skillId": skill_id,
                    "name": skill_id_map[skill_id]["name"]
                })

        results.append({
            "talentId": talent_id,
            "name": talent["name"],
            "score": round(float(score), 2),
            "matchedSkills": matched_skills,
            "missingSkills": missing_skills
        })

    results.sort(key=lambda r: r["score"], reverse=True)
    return results
