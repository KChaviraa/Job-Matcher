# 💼 AI Career Coach & Job Matcher Hub

Welcome to the **AI Career Coach & Job Matcher Hub**! This is a full-stack, AI-integrated portfolio project that combines a modern **Next.js React dashboard** with an **interactive Google Gemini AI Career Coach**.

Both systems are linked dynamically using a shared JSON data layer, allowing real-time synchronization between the AI agent and the web interface.

---

## 🚀 Key Features

* **Interactive AI Career Coach**: A specialized Google ADK (Agent Development Kit) agent running on **Gemini 2.5 Flash** that acts as a career advisor.
* **Persistent Skill Matching**: Tracks user profile skills, background, and preferences persistently.
* **Dynamic Matchmaking**: Programmatically scores job listings against your profile skills, highlighting matches, missing requirements, and giving tailored portfolio advice.
* **Real-time Frontend Sync**: Ask the AI Coach (in the terminal or web chat) to add a new job listing, and it is instantly appended to the database and rendered on the React web UI.
* **Modern Design System**: Next.js frontend built with sleek typography, glassmorphism, responsive grid cards, and modern animations.

---

## 🛠️ Architecture & Tech Stack

* **Frontend**: Next.js, React, CSS Modules, Responsive CSS Grid
* **AI Core**: Google Agent Development Kit (`@google/adk`), `@google/genai`
* **Large Language Model**: Gemini 2.5 Flash
* **Data Sync Layer**: Shared local JSON file database (`jobs.json`) and user profile cache (`user_profile.json`)

---

## 💻 How to Install & Run

This workspace contains two main modules:
1. `job-tracker/` (The React Web Frontend)
2. `adk-project/` (The AI Agent)

### 1. Setup the AI Agent
Navigate to the `adk-project` directory:
```bash
cd adk-project
npm install
```
Create a `.env` file in the root of `adk-project/` and add your Google Gemini API Key:
```env
GOOGLE_GENAI_API_KEY="your-gemini-api-key-here"
```
Start the interactive AI agent:
```bash
source .env && npx adk run ./agent.mjs
# OR start the local web chat interface:
source .env && npx adk web .
```

### 2. Setup the Next.js Frontend
Navigate to the `job-tracker` directory in a new terminal window:
```bash
cd job-tracker
npm install
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser. 

*Try asking the AI agent to add a new job listing, refresh the web browser on port 3000, and watch it show up instantly!*
