# Build Plan

Execution checklist for the 16-hour build. Work the phases in order and check items off as they meet the definition of done in `CLAUDE.md`.

Window: Saturday 13:00 to Sunday 05:00 (code freeze). The submission window opens at 01:00. Feature freeze is 23:00, after that, integration, bug fixes, polish, and submission only.

## Phase 0: Setup (13:00–14:00)
- [ ] Public repository created; `.gitignore` covers node_modules, .env, __pycache__
- [ ] Scaffold `frontend/` (Vite + React + Tailwind), `backend/` (Express), `ml/` (FastAPI)
- [ ] `.env.example` in each service, no real values
- [ ] PostgreSQL running; schema created (Architecture, "Database schema")
- [ ] Seed data loaded from `backend/db/seed/*.json`
- [ ] API contract confirmed frozen (Architecture, "API contract")
- [ ] Demo flow agreed (PRD, "Demo flow")

## Phase 1: Parallel sprint (14:00–18:00)
Frontend:
- [ ] Layout and routing (Landing, Profile, GapResult, Employer)
- [ ] Landing: problem headline, key figures, primary action
- [ ] Profile page rendering from mocks
ML:
- [ ] `matching.py`: gap logic and readiness, explainable (Architecture, "Matching logic")
- [ ] `POST /gap` standalone, verified against the demo persona
- [ ] `test_matching.py` covering the Budi case
Backend:
- [ ] DB connection (parameterized), error handler, cors, zod validation
- [ ] `GET /talents/:id`, `/roles`, `/jobs`, `/courses`

Milestone: `/gap` works standalone.

## Phase 2: First integration (18:00–19:00)
- [ ] Frontend Profile talks to the real backend
- [ ] Backend `/gap` proxies the ML service
- [ ] End-to-end: pick a profile, readiness and gaps render in the UI

## Phase 3: Second sprint (19:00–23:00)
- [ ] ML `POST /match` (candidate ranking per role)
- [ ] Employer view with ranked candidates
- [ ] Learning path recommendations and simulated readiness rise
- [ ] Readiness chart (Should)
- [ ] Cross-border toggle (Should)
- [ ] Framer Motion on the key transitions
- [ ] First deployment to Cloud Run; live URL verified

Milestone: live URL with matching working end-to-end.

## Phase 4: Freeze and polish (23:00–01:00)
- [ ] Stop new features
- [ ] Populate the hero persona; confirm the demo flow is smooth on the live URL
- [ ] Save the mock fallback in `frontend/src/mocks/`
- [ ] Critical bug fixes only
- [ ] Confirm no secrets staged (`git status`, grep for .env)

## Phase 5: Submission (01:00–03:00)
- [ ] Submit early (revisable until 05:00)
- [ ] `README.md`: overview, run instructions, architecture, Disclosure section
- [ ] Record the three-minute demo video (demo flow)
- [ ] Pitch deck, one to two slides (may embed the video)

## Phase 6: Buffer and rehearsal (03:00–04:30)
- [ ] Bug fixes and UI polish
- [ ] Rehearse the pitch in English twice against a timer (three minutes video, five minutes stage)
- [ ] Update the submission if needed

## Phase 7: Final (04:30–05:00)
- [ ] Public repo link opens
- [ ] Video plays
- [ ] Deck embeds correctly
- [ ] Final submission sent before 05:00 (hard cutoff)

## Before the event
Data and design only, no application code, per the rules.
- [ ] Complete seed data (JSON): ~30 skills, 5 roles with weights, 12–15 jobs, 20–30 courses, 50–80 profiles
- [ ] All screens designed (Figma)
- [ ] English pitch script and demo storyline
- [ ] GCP account ready (billing active, Cloud Run quota); repo created
- [ ] At least two members in the WhatsApp community
