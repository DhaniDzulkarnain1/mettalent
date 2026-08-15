from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class GapRequest(BaseModel):
    talentId: int
    roleId: int

class Skill(BaseModel):
    skillId: int
    name: str
    proficiency: int

class Gap(BaseModel):
    skillId: int
    name: str
    weight: int
    reason: str

class GapResponse(BaseModel):
    readiness: float
    have: List[Skill]
    gaps: List[Gap]
    explanation: str

class MatchRequest(BaseModel):
    roleId: int
    location: str

class MatchedSkill(BaseModel):
    skillId: int
    name: str

class TalentMatch(BaseModel):
    talentId: int
    name: str
    score: float
    matchedSkills: List[MatchedSkill]
    missingSkills: List[MatchedSkill]

@app.post("/gap", response_model=GapResponse)
async def compute_gap(request: GapRequest):
    return {
        "readiness": 0.52,
        "have": [{"skillId": 1, "name": "Networking", "proficiency": 2}],
        "gaps": [{"skillId": 2, "name": "Cloud Computing", "weight": 3, "reason": "Required for role"}],
        "explanation": "Covers 1/2 required skills; largest gap: Cloud Computing"
    }

@app.post("/match", response_model=List[TalentMatch])
async def compute_match(request: MatchRequest):
    return [
        {
            "talentId": 1,
            "name": "Sample Talent",
            "score": 0.78,
            "matchedSkills": [{"skillId": 1, "name": "Networking"}],
            "missingSkills": [{"skillId": 2, "name": "Cloud Computing"}]
        }
    ]
