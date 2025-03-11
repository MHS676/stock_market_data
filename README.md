Stock Market Dashboard (Full-Stack App)

first open  **Backend API (Render):** [https://stock-market-data-backend-r3wk.onrender.com]  
second open **Frontend (Vercel):** [https://stock-market-data.vercel.app/]  

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

For Windows:
python -m venv venv
venv\Scripts\activate

3. Install Dependencies
pip install -r requirements.txt

4. Set Up PostgreSQL Database
Use PostgreSQL locally or on Render.com.

Create a .env file in the backend directory:

DATABASE_URL=postgresql://your_user:your_password@your_host/your_database

Apply Database Migrations
alembic upgrade head

6. Run the FastAPI Server
   uvicorn main:app --reload

Server will start at: http://127.0.0.1:8000

Test API in Swagger
Open http://127.0.0.1:8000/docs to test the API.

Backend API Endpoints
HTTP Method	Endpoint	Description
POST	/trade/	Create a new trade
GET	/trade/	Get trades (paginated & filterable)
GET	/trade/{trade_id}	Get a trade by ID
PUT	/trade/{trade_id}	Update a trade
DELETE	/trade/{trade_id}	Delete a trade

Frontend Setup (ReactJS)
1. Move to Frontend Directory
cd ../frontend

2. Install Dependencies
npm install

Run the Frontend
npm run dev

Frontend will run at http://localhost:5173

Frontend Features
1. Multi-Axis Chart
Line Chart: Close Price

Bar Chart: Volume

Dropdown Filter: Trade Code

2. Paginated Table with Search
Search by Trade Code

Paginate through stock data

Styled with TailwindCSS

Deployment
Backend Deployment (Render)
Push Code to GitHub.

Go to Render → Create a New Web Service.

Select Your GitHub Repo.

Build Command:
pip install -r requirements.txt

Start Command:
uvicorn main:app --host 0.0.0.0 --port $PORT

Deploy & Get Live URL!

Frontend Deployment (Vercel)
Push Code to GitHub.

Go to Vercel → Import GitHub Repository.

Deploy & Get Live URL!

Author
Hasan Talukder
GitHub: [MHS676](https://github.com/MHS676/stock_market_data)
LinkedIn: [Hasan Talukder](https://www.linkedin.com/in/hasan-talukder100/)

Stock Market Dashboard - FastAPI & React
What I Learned
Building a full-stack application using FastAPI & React.

Implementing pagination and search filters.

Creating interactive multi-axis charts with Recharts.

Deploying backend on Render and frontend on Vercel.

Managing PostgreSQL with SQLAlchemy and Alembic.

Using environment variables for secure database access.

Challenges Faced
Handling CORS issues between backend & frontend.

Fixing database migration errors in Alembic.

Formatting data correctly for visualization.

Deploying on cloud services with free-tier limitations.
