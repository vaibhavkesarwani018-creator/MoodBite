# MoodBite 🍽️

**MoodBite — Food for your mood.**

MoodBite is a mood-based restaurant recommendation web application. Users select how they are feeling and choose a city to discover restaurants and dishes that match their cravings.

## GitHub Repository

[https://github.com/vaibhavkesarwani018-creator/MoodBite](https://github.com/vaibhavkesarwani018-creator/MoodBite)

### Clone the Repository

```bash
git clone https://github.com/vaibhavkesarwani018-creator/MoodBite.git
cd MoodBite
```

## Features

- Select from five moods: Cheesy, Spicy, Celebratory, Period Cravings, and Sweet.
- Choose a city: Bhilai or Jabalpur.
- Get restaurant recommendations based on your selected mood and city.
- View restaurant addresses, available dishes, and prices.
- Open restaurant locations and available Swiggy or Zomato links.

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
MoodBite/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── server/
│   ├── models/
│   │   ├── Dish.js
│   │   └── Restaurant.js
│   ├── routes/
│   │   ├── meta.js
│   │   └── recommend.js
│   ├── seed.js
│   ├── server.js
│   └── package.json
├── index.html
├── package.json
└── vite.config.js
```

## Prerequisites

Install the following before running the project:

- [Node.js and npm](https://nodejs.org/)
- MongoDB (local installation or MongoDB Atlas)
- Git

## How to Run the Project

The frontend and backend run in **two separate terminals**. Keep both terminals open while using the application.

### 1. Backend Setup

Open a terminal in the project folder and run:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=mongodb+srv://kamblesaanvi07_db_user:MoodBite123@moodbite.kc7eai8.mongodb.net/moodbite
PORT=5001
```

Start the backend:

```bash
npm run dev
```

The backend should connect to MongoDB and start at:

```text
http://localhost:5001
```

### 2. Frontend Setup

Open a **second terminal** in the main project folder (the folder containing the root `package.json`).

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npx vite
```

Open the local URL printed in the terminal. By default:

```text
http://localhost:5173
```

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Then you can use:

```bash
npm run dev
```

## Available API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Checks whether the API server is running |
| GET | `/api/moods` | Returns available moods |
| GET | `/api/areas` | Returns restaurant areas stored in the database |
| GET | `/api/recommend?mood=cheesy&city=bhilai` | Returns restaurant recommendations based on mood and city |

### Available Mood Values

- `cheesy`
- `spicy`
- `celebratory`
- `period-cravings`
- `sweet`

### Available Cities

- `bhilai`
- `jabalpur`

## Database Setup

The backend uses MongoDB to store restaurant and dish information.

A seed script is included at `server/seed.js`. If you need to populate the database with sample data, inspect the script before running:

```bash
cd server
npm run seed
```

**Important:** Do not run the seed script against a database containing data you need to preserve without first checking what the script changes.

## Troubleshooting

**1. Missing script: "dev"**

If you get this error in the frontend folder, use:

```bash
npx vite
```

Or add the Vite scripts to the root `package.json`.

**2. Frontend cannot connect to the backend**

- Make sure the backend server is running.
- Check whether MongoDB connected successfully.
- Confirm that `PORT=5001` is set in `server/.env`.
- Verify that the MongoDB connection string is correct.

**3. MongoDB connection error**

- Verify your connection string.
- For MongoDB Atlas, check your database user credentials and network access settings.

## Security Notes

- Keep database credentials inside `server/.env`.
- Never upload `.env` files or database passwords to GitHub.
- Do not expose private credentials in screenshots or documentation.

---

**Made with love for food lovers.**
