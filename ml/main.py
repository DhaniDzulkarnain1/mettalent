from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from matching import compute_gap as compute_gap_impl, compute_match as compute_match_impl

app = FastAPI()

class GapRequest(BaseModel):
    talentId: str
    roleId: str

class Skill(BaseModel):
    skillId: str
    name: str
    proficiency: int

class Gap(BaseModel):
    skillId: str
    name: str
    weight: int
    reason: str

class GapResponse(BaseModel):
    readiness: float
    have: List[Skill]
    gaps: List[Gap]
    explanation: str

class MatchRequest(BaseModel):
    roleId: str
    location: str

class MatchedSkill(BaseModel):
    skillId: str
    name: str

class TalentMatch(BaseModel):
    talentId: str
    name: str
    score: float
    matchedSkills: List[MatchedSkill]
    missingSkills: List[MatchedSkill]

@app.post("/gap", response_model=GapResponse)
async def gap_endpoint(request: GapRequest):
    try:
        result = compute_gap_impl(request.talentId, request.roleId)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/match", response_model=List[TalentMatch])
async def match_endpoint(request: MatchRequest):
    try:
        results = compute_match_impl(request.roleId, request.location)
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
