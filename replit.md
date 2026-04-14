# IC Dental Clinic Website

## Overview

Single-page dental clinic website for IC Dental Clinic in Borivali West, Mumbai. Built with React + Vite frontend and Express backend in a pnpm monorepo.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle for API server)

## Architecture

### Frontend (`artifacts/ic-dental`)
- Single-page scroll-navigation website
- Sections: Hero, About (clinic + doctor), Services, Gallery (before/after slider), Reviews, Contact
- Floating WhatsApp button (bottom-right)
- Sticky navbar with smooth scroll
- 3-column footer with clinic info, quick links, contact details

### Backend (`artifacts/api-server`)
- `POST /api/contact` — receives contact form submissions, stores in PostgreSQL

### Database
- `contact_submissions` table — stores name, phone, message, createdAt

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Key Files

- `lib/api-spec/openapi.yaml` — API contract (contact form endpoint)
- `lib/db/src/schema/contactSubmissions.ts` — DB schema
- `artifacts/api-server/src/routes/contact.ts` — Contact form API route
- `artifacts/ic-dental/src/pages/Home.tsx` — Main page composing all sections
- `artifacts/ic-dental/src/components/home/` — Section components (Hero, About, Services, Gallery, Reviews, Contact)
- `artifacts/ic-dental/src/components/layout/` — Navbar, Footer
- `artifacts/ic-dental/src/components/ui/FloatingWhatsApp.tsx` — WhatsApp floating button

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
