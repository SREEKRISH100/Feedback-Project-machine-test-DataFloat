# Feedback-Project

A MERN Stack application where users can submit feedback and admins can view all feedbacks/users.

## Tech Stack

MongoDB – NoSQL Database

Express.js – Backend Framework

React.js – Frontend Library

Node.js – Runtime Environment

Axios – For API calls

JWT (JSON Web Token) – Authentication & Authorization

Tailwind CSS – Styling

React-Toastify – Toast Notifications

## Features

🔹 User Authentication (JWT)

🔹 Submit feedback with comments & rating

🔹 View own feedback history

🔹 Admin Dashboard to view all user feedbacks and to view users

🔹 Real-time toast notifications for actions

🔹 Responsive UI with Tailwind CSS

## Project Structure

```bash
Feedback-App/
├── client/                      # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │
│   │   ├── Admin/               # Components for Admin functionality
│   │   │   ├── AdminNav.jsx         # Admin navigation bar
│   │   │   ├── AdminViewFeedback.jsx # Admin feedback viewing
│   │   │   └── AdminViewUser.jsx     # Admin user management
│   │   │
│   │   ├── Home/                # Components for Home functionality
│   │   │   ├── AdminHome.jsx        # Admin home page
│   │   │   ├── HomeNav.jsx          # Navigation bar for home
│   │   │   ├── HomePage.jsx         # Landing page
│   │   │   ├── Login.jsx            # Login page component
│   │   │   └── Register.jsx         # Register page component
│   │   │
│   │   ├── User/                 # Components for User functionality
│   │   │   ├── UserAddFeedback.jsx # Add feedback form
│   │   │   ├── UserHome.jsx        # User home page
│   │   │   ├── UserNav.jsx         # User navigation bar
│   │   │   └── UserViewFeedback.jsx # View feedback (User)
│   │   │
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── server/                      # Node.js + Express Backend
│   ├── controller/              # Controllers
│   │   ├── adminController.js
│   │   └── userController.js
│   ├── Middleware/
│   │   └── verifyToken.js
│   ├── model/                   # MongoDB Models
│   │   ├── Feedback.js
│   │   └── User.js
│   ├── routes/                  # Express Routes
│   │   ├── adminRoute.js
│   │   └── userRoutes.js
│   ├── node_modules/
│   ├── server.js
│   └── .env                     # Environment Variables (JWT_KEY, MONGO_URI, PORT)
│
├── .gitignore
└── assets/                      # Screenshots
```

## Getting Started
### Prerequisites

Node.js

MongoDB (local or MongoDB Atlas)

#### 1 Clone the Repository
git clone https://github.com/SREEKRISH100/Feedback-Project-machine-test-DataFlow.git

cd Feedback-Project-machine-test-DataFlow


#### 2 Backend Setup (Server)

cd server

npm install

npm run dev


Update the .env file with your MongoDB URI and JWT secret key.

 #### 3 Frontend Setup (Client)

cd ../client

npm install

npm run dev


---

## 📸 Screenshots

### Admin
- **Admin View Feedback**  
  ![Admin View Feedback](/assets/AdminViewFeedback.png)

- **Admin View User**  
  ![Admin View User](/assets/AdminViewUser.png)

---

### Home
- **Home Page**  
  ![Home Page](/assets/HomePage.png)

---

### User
- **User Add Feedback**  
  ![User Add Feedback](/assets/UserAddFeedBack.png)


- **User View Feedback**  
  ![User View Feedback](/assets/UserViewFeedback.png)

---

### Auth
- **Login Page**  
  ![Login Page](/assets/LoginPage.png)




