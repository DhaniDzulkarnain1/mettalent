# Product Requirements

## Problem

Batam has attracted over IDR 120 trillion in data center investment across nine projects, and its economy grew 6.66%, yet it remains the largest contributor to unemployment in Riau Islands, the province with Indonesia's second-highest open unemployment rate (6.87%). Around 64% of the unemployed hold only secondary-school qualifications, while the industry needs networking, cloud, AI, and security skills. Forty-five minutes away by ferry, Singapore faces the same shortage and hires remote talent from Vietnam and India instead. The root cause is a broken talent supply chain between campuses, certification, and industry.

Full data and citations live in the separate problem-statement document.

## Solution

A platform that reconnects the broken chain through four core capabilities:

1. Talent profile: skills and education.
2. Skill gap engine: a readiness score against a data center role, plus the list of missing skills.
3. Learning path: micro-credentials that close the identified gaps.
4. Matching: ranking talent against real openings in Batam and Singapore.

This is not a job board. The gap engine and learning path are the differentiators and should receive the most engineering effort.

## Scope (MoSCoW)

### Must
- Talent onboarding (skills and education, manual form)
- Skill gap engine: readiness score and gap list per role
- Learning path: micro-credential recommendations that close gaps
- Match score between talent and openings
- Employer view: ranked candidates per role
- Live deployment on GCP

### Should
- Cross-border toggle (Batam vs Singapore openings)
- Readiness visualization (radar or bar chart, skills held vs required)
- Job detail page with requirements

### Could
- Learning-path progress tracking
- Mock badges or certificates
- Job filter and search
- Aggregate city-level skills-gap dashboard

### Won't
- Real authentication: use a pre-filled user
- Payments, real course content, notifications, mobile app, messaging
- CV upload and parsing: a manual form is enough

## Demo flow

This is the only flow that must be flawless. Every Must-have serves it.

1. **Landing**: problem headline with the key figures (IDR 120T investment vs ~64% secondary-school unemployment). Primary action: "Start as talent."
2. **Profile (pre-filled)**: "Budi," a Batam vocational graduate in networking with basic skills. Action: "Analyze readiness."
3. **Gap result**: 52% readiness for Network Operations; a radar chart of skills held vs required; a gap list (cloud networking, security fundamentals).
4. **Learning path**: three prioritized micro-credentials that close the gaps, with a simulated readiness rise to 84% on completion.
5. **Employer view**: as a data center operator, see ranked candidates for Network Operations; Budi climbs after upskilling.
6. **Cross-border toggle**: Singapore openings appear; Batam talent matches a remote SG role. Narrative: 45 minutes by ferry, not a remote hire from Vietnam.
7. **Close**: brief architecture and the pilot path (Polibatam with BP Batam and a data center operator).

## Demo personas (seed data)

- **Budi**: primary talent; vocational networking graduate, 52% initial readiness for Network Operations. Drives the gap → learning path → re-ranking story.
- **Employer**: a data center operator with open Network Operations and Cloud Engineer roles.
- **50–80 synthetic profiles**: populate the employer view so rankings look realistic.

## Judging criteria

The product is shaped to win on all five:

1. Problem understanding and relevance: carried by the landing and narrative.
2. Technical execution: code quality, security, scalability, transparent disclosure.
3. Innovation and creativity: the gap engine and learning path, not the listing.
4. Impact and feasibility: a concrete pilot path through Polibatam.
5. Presentation and demo: a flawless demo flow with a mock fallback.
