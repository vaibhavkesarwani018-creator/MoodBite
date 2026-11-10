# MoodBite server

1. `cd server && npm install`
2. Copy `.env.example` to `.env` and set `MONGO_URI`
3. `npm run seed` (loads sample data; edit seed.js with real Bhilai data)
4. `npm run dev` -> http://localhost:5000

## Endpoints
- GET /api/moods
- GET /api/areas
- GET /api/recommend?mood=stressed&area=Sector 6&diet=veg&maxPrice=300
