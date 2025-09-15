# EventForge – AI-Powered Event Management Platform

EventForge is a modern, full-stack event management platform designed to **redefine how hackathons, conferences, webinars, and competitions** are organized and experienced.
It goes beyond existing solutions like *Unstop* and *Devfolio* by offering:

* ✨ Intuitive UI/UX
* 🤖 AI-driven personalization
* 🎮 Immersive collaboration & gamification
* 📊 Advanced analytics for organizers & sponsors

---

## 🚀 Features

* **Modern UI/UX** – Clean React + Tailwind interface with drag-and-drop event builder.
* **AI-Powered Matching** – Smart participant team formation & event recommendations.
* **Immersive Virtual Events** – VR/AR support, live streaming, polls, and gamification.
* **Collaboration Tools** – Real-time chat, file sharing, virtual whiteboards, and code editor integration.
* **Analytics Dashboard** – Engagement metrics, sponsor ROI, predictive analytics.
* **Seamless Integrations** – Google Calendar, GitHub, Slack, payment gateways, social media.
* **Security** – Role-based access, end-to-end encryption, GDPR/CCPA compliance.
* **Mobile-First (PWA)** – Works offline with push notifications and native-like performance.
* **Sustainability Tracking** – Event carbon footprint calculator + eco-friendly suggestions.

---

## 📂 Project Structure

```
eventforge/
│── client/                        # React Frontend
│   ├── public/                    # Static files
│   ├── src/                       # App source code
│   │   ├── assets/                # Images, logos, icons
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                 # Pages (Dashboard, Events, Profile, etc.)
│   │   ├── features/              # Redux Toolkit slices
│   │   ├── services/              # API calls
│   │   ├── App.js                 # Main App
│   │   ├── index.js               # Entry point
│   │   └── index.css              # Tailwind styles
│   ├── package.json
│
│── server/                        # Node.js Backend
│   ├── config/                    # DB + JWT configs
│   ├── controllers/               # Business logic
│   ├── models/                    # MongoDB Schemas
│   ├── routes/                    # API Routes
│   ├── middleware/                # Auth, Error handlers
│   ├── utils/                     # Helpers (AI matching, analytics)
│   ├── server.js                  # Express app entry
│   ├── package.json
│
│── docker-compose.yml             # Docker services (client + server + mongo)
│── Dockerfile.client              # Dockerfile for frontend
│── Dockerfile.server              # Dockerfile for backend
│── README.md                      # Documentation
│── .env                           # Environment variables
│── .gitignore
```

---

## 🛠 Installation & Setup

### 🔹 Prerequisites

* [Node.js](https://nodejs.org/) (v18+ recommended)
* [MongoDB](https://www.mongodb.com/) (local or cloud via Atlas)
* [Docker](https://www.docker.com/) (optional, for containerized setup)

---

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/eventforge.git
cd eventforge
```

---

### 🔹 2. Frontend Setup

```bash
cd client
npm install
```

Start frontend:

```bash
npm start
```

Frontend runs on 👉 [http://localhost:3000](http://localhost:3000)

---

### 🔹 3. Backend Setup

```bash
cd ../server
npm install
```

Start backend:

```bash
npm run dev
```

Backend runs on 👉 [http://localhost:5000](http://localhost:5000)

---

### 🔹 4. Docker Setup (Optional)

If you want to run everything via Docker:

```bash
docker-compose up --build
```

This will start:

* React frontend on `:3000`
* Node backend on `:5000`
* MongoDB on `:27017`

---

## 🔧 Environment Variables

Create a `.env` file in `server/`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/eventforge
JWT_SECRET=your_secret_key
```

---

## 📈 Roadmap

* [ ] AI-driven session recommendations
* [ ] VR/AR conference support
* [ ] In-app payments integration
* [ ] Sustainability carbon-tracking dashboard

---

## 📜 License

This project is licensed under the **MIT License**.

---

⚡ **EventForge** – Empowering the future of hackathons, conferences, and beyond 🚀

---
