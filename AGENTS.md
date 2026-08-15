# mettalent

A talent supply chain platform for the Batam–Singapore corridor. It profiles a candidate's skills, measures the gap against data center role requirements, recommends micro-credentials to close that gap, and matches ready candidates to real openings. It is not a job board, the gap analysis and learning path are the point.

Built for the Batam Singapore Hackathon 2026 (Track 1 / Challenge 1). See `docs/PRD.md` for product scope, `docs/ARCHITECTURE.md` for the technical design, and `docs/TASKS.md` for the build plan.

## Scope discipline

- Build only what appears in the demo flow (`docs/PRD.md`, "Demo flow"). If a feature is not on that path, leave it out.
- Follow the MoSCoW scope in `docs/PRD.md`. Finish every MUST before starting a SHOULD; do not touch COULD or WON'T without being asked.
- This is a 16-hour prototype. Prefer the simplest thing that works, no premature abstraction, no extra services beyond those in the architecture.
- Feature freeze at 23:00. After that, integration, bug fixes, polish, and submission only.

## Stack

- Frontend: React (Vite), Tailwind CSS, Framer Motion.
- Backend: Node.js, Express (REST).
- ML service: Python, FastAPI, scikit-learn. Matching uses weighted cosine similarity, no training data, and every score must be explainable.
- Database: PostgreSQL, seeded from `backend/db/seed/*.json`.
- Deploy: Google Cloud Run.

Do not swap any of these without confirming first. Follow the design tokens in `docs/DESIGN.md` for all UI, colors, Poppins type scale, radii, and component specs. Use the Tailwind token names, not raw hex or pixel values.

## Security

- Never commit secrets. Credentials come from environment variables; keep `.env` out of git and provide `.env.example` with empty values.
- Use parameterized queries everywhere. No string-built SQL.
- Validate input at the API boundary: zod in Express, pydantic in FastAPI.
- Restrict CORS to the known frontend origin, not `*`.
- Do not log candidate PII.
- The repository is public. Run `git status` before every commit and confirm no credentials are staged.

## Code conventions

- Small, single-purpose functions. If one grows past ~40 lines or needs a "next part" comment, split it.
- Descriptive names: `computeReadinessScore`, not `calc`; `requiredSkills`, not `data2`.
- Handle errors explicitly. Each endpoint wraps its work in try/catch, returns the correct status (400/404/500), and responds with `{ "error": string }`.
- No magic numbers. Skill weights, readiness thresholds, and similar values live as named constants in one place.
- Extract on the third repetition, not the first.
- Comments explain why, not what.

## Workflow

- The API contract in `docs/ARCHITECTURE.md` is frozen. Do not change request or response shapes without updating that file and telling the team.
- Keep a mock fallback: the frontend stores sample responses for the demo persona in `frontend/src/mocks/`. If the ML service or network fails during the demo, the UI still renders.
- Commit small and often with clear messages (`feat:`, `fix:`, `chore:`).
- Record AI tools, models, datasets, and any pre-existing code in `README.md` under Disclosure, per hackathon rules.

## Commands

Adjust if your setup differs.

```bash
# frontend/
npm run dev
npm run build
npm run lint

# backend/
npm run dev
npm run seed        # load db/seed/*.json

# ml/
uvicorn main:app --reload --port 8000
pytest
```

## Definition of done

A task is done when it runs end-to-end on the demo flow, stages no secrets, validates its input, handles its errors, and appears correctly in the demo. Anything short of that is not done.
