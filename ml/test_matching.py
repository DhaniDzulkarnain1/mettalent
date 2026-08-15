import pytest
from matching import compute_gap, compute_match, talent_skills_data

def test_budi_initial_readiness():
    result = compute_gap("t1", "network-ops")
    assert result["readiness"] == 0.52

def test_budi_upskilled_readiness():
    original_budi_skills = [ts for ts in talent_skills_data if ts["talentId"] == "t1"]

    talent_skills_data.extend([
        {"talentId": "t1", "skillId": "cloud-networking", "proficiency": 2},
        {"talentId": "t1", "skillId": "security-fundamentals", "proficiency": 2},
        {"talentId": "t1", "skillId": "load-balancing", "proficiency": 2}
    ])

    result = compute_gap("t1", "network-ops")
    assert result["readiness"] == 0.84

    for skill in talent_skills_data[:]:
        if skill["talentId"] == "t1" and skill["skillId"] in ["cloud-networking", "security-fundamentals", "load-balancing"]:
            talent_skills_data.remove(skill)

def test_gaps_sorted_by_weight():
    result = compute_gap("t1", "network-ops")
    gaps = result["gaps"]

    for i in range(len(gaps) - 1):
        assert gaps[i]["weight"] >= gaps[i + 1]["weight"]

def test_match_sorted_by_score():
    results = compute_match("network-ops", "batam")

    for i in range(len(results) - 1):
        assert results[i]["score"] >= results[i + 1]["score"]
