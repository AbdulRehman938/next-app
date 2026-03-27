# Backend (Express + MongoDB)

Professional conventional backend scaffold for this project.

## Stack

- Node.js + Express
- MongoDB + Mongoose
- TypeScript
- Zod validation

## Structure

backend/
  src/
    config/
      db.ts
      env.ts
    controllers/
      inquiry.controller.ts
    middlewares/
      errorHandler.ts
      notFound.ts
    models/
      Inquiry.ts
    routes/
      health.routes.ts
      index.ts
      inquiry.routes.ts
    services/
      inquiry.service.ts
    utils/
      ApiError.ts
    app.ts
    server.ts
  .env.example
  package.json
  tsconfig.json

## Setup

1. Copy env values:
   - cp .env.example .env (or create manually on Windows)
2. Install dependencies:
   - npm install
3. Run in development:
   - npm run dev
4. Build for production:
   - npm run build
5. Start production build:
   - npm start

## API Endpoints

- GET /api/v1/health
- GET /api/v1/inquiries
- POST /api/v1/inquiries

POST payload example:

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "details": "We need help launching our SaaS landing and onboarding flow."
}
