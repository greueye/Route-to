# Route-to


# Authenticated Map App – React + FastAPI

This is a full-stack assignment for plotting a route from Point A to Point B, accessible only to authenticated users. The frontend is built in React and the backend in FastAPI.

---

## 🔧 Features

- Google Sign-In authentication (Firebase)
- Google Maps route drawing (origin → destination)
- REST API in FastAPI to fetch directions
- Environment variables support via `.env`

---

## 📁 Project Structure

```
map-auth-app/
├── client/             # React frontend
│   └── src/
│       ├── App.js
│       └── firebase.js
├── server/             # FastAPI backend
│   └── main.py
├── .env                # Environment variables
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/map-auth-app.git
cd map-auth-app
```

### 2. Set up `.env` file
Create a `.env` file in root:

```
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_key
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

---

### 3. Run the backend (FastAPI)
```bash
cd server
pip install fastapi uvicorn requests python-dotenv
uvicorn main:app --reload
```

---

### 4. Run the frontend (React)
```bash
cd ../client
npm install
npm start
```

---

## ✅ Demo Flow

- Sign in with Google
- Enter Origin and Destination
- Click “Get Route”
- View route with distance and time

---

## 🌐 Deployment Tips

- Frontend: Host via Vercel / Netlify
- Backend: Host via Render / Railway / Fly.io
- Protect `.env` keys; use environment variables in production

---

## 📄 License

MIT License
