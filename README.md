# Kingslee HR (EON-HR)

Full-stack, white-label HRMS inspired by Jisr and PalmHR. Frontend uses Next.js 14, TailwindCSS and ShadCN-like primitives; backend uses NestJS with MySQL, Redis, JWT auth, multi-tenant-aware modules, and Docker Compose for local setup.

## Stack
- **Frontend:** Next.js 14 App Router, TailwindCSS, React Query, Zustand-ready architecture
- **Backend:** NestJS 10, TypeORM (MySQL), Redis, JWT + refresh tokens, role-based access control helpers
- **Infrastructure:** Docker Compose with MySQL + Redis, S3-ready storage placeholders

## Getting Started
1. Copy env files
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
2. Start with Docker Compose
   ```bash
   cd infra
   docker compose up --build
   ```
3. Open the app at http://localhost:3000 and the API at http://localhost:4000

## GitHub Codespaces quickstart
1. Create a Codespace from this repo (4+ cores recommended so Docker and Next.js build quickly).
2. In the Codespace terminal run:
   ```bash
   # install workspace-level deps
   cd /workspaces/EON-HR
   npm install --prefix backend
   npm install --prefix frontend

   # copy env templates (edit later as needed)
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env

   # start database + cache + services
   cd infra
   docker compose up --build -d
   ```
3. Codespaces will forward ports automatically; open the forwarded URLs for 3000 (frontend) and 4000 (API).
4. If you prefer not to use Docker in Codespaces, you can run services separately:
   ```bash
   # terminal 1 (MySQL + Redis from Docker)
   cd infra && docker compose up db redis

   # terminal 2 (backend)
   cd backend && npm run start:dev

   # terminal 3 (frontend)
   cd frontend && npm run dev -- --hostname 0.0.0.0 --port 3000
   ```
   Ensure environment variables point to the correct hosts (e.g., DB host `127.0.0.1` when using Docker services).

## Database
- Migration drafts live in `backend/database/migrations/001_init.sql`
- Demo seed data lives in `backend/database/seeders/demo.sql`

## Features (scaffolded)
- Auth (register/login) with Argon2id hashing and JWT/refresh token generation
- Tenant bootstrap endpoint for SaaS onboarding
- HR modules: employees, payroll, attendance, leave, recruitment, performance, documents, notifications, settings/branding
- Responsive dashboard with KPIs, attendance feed, payroll preview, and recruitment pipeline examples

## Scripts
- Backend: `npm run start:dev` (watch), `npm run build`
- Frontend: `npm run dev`, `npm run build`

## Notes
This repository ships with production-grade patterns but uses mocked/demo data so you can extend quickly for full implementations (queues, audit logs, OTP, 2FA, S3 storage, etc.).
