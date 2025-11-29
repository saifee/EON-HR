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
