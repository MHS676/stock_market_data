Stock Market Dashboard (Full-Stack App)
This project is a full-stack web application that allows users to view, search, filter, and analyze stock market data. It is built with:

Backend: FastAPI + PostgreSQL

Frontend: ReactJS + Recharts

Deployment: Render.com

Features
Backend (FastAPI & PostgreSQL)
CRUD Operations (Create, Read, Update, Delete)

Pagination & Search (Filter by Trade Code)

CORS Middleware for Frontend Requests

Database Migrations with Alembic

Secure Environment Variables with .env

Deployed on Render.com

Frontend (ReactJS & Recharts)
Interactive Multi-Axis Chart (Close Price & Volume)

Trade Code Dropdown Filter

Paginated Table with Search Functionality

Responsive Design with TailwindCSS

Hosted on Vercel

Tech Stack
Backend
FastAPI - High-performance Python web framework

PostgreSQL - Relational database for storing stock data

SQLAlchemy - ORM for database interactions

Alembic - Database migration management

Pydantic - Data validation

Uvicorn - ASGI server

Frontend
ReactJS - Frontend framework

Recharts - Data visualization

Axios - API requests

TailwindCSS - Styling

Project Structure

stock-market-dashboard
├── backend
│   ├── main.py               # FastAPI Application Entry
│   ├── database.py           # Database Configuration
│   ├── models.py             # Database Models
│   ├── schemas.py            # Pydantic Schemas
│   ├── routes.py             # API Routes
│   ├── requirements.txt      # Backend Dependencies
│   └── .env                  # Environment Variables
├── frontend
│   ├── src/
│   │   ├── App.jsx           # Main Frontend Component
│   │   ├── api.js            # API Service for Fetching Data
│   │   ├── Dashboard.jsx     # Multi-Axis Chart & Table
│   │   ├── Table.jsx         # Paginated Table with Search
│   │   └── styles.css        # Tailwind Styling
│   ├── package.json          # Frontend Dependencies
│   └── .env                  # Environment Variables (Frontend)
├── README.md                 # Project Documentation
├── .gitignore                # Ignore Files for Git
└── .env                      # Root Environment Variables


Backend Setup (FastAPI & PostgreSQL)
1. Clone the Repository

git clone https://github.com/MHS676/stock-market-dashboard.git
cd stock-market-dashboard/backend

2. Create a Virtual Environment
For Mac/Linux:

python3 -m venv venv
source venv/bin/activate

