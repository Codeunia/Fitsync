# 🏋️‍♂️ FitSync – Fitness Tracking & Profile Dashboard

**FitSync** is a MERN (MongoDB, Express, React, Node.js) based fitness companion app that helps users:

- Sign up & log in securely
- Maintain a personal fitness profile
- Track health details like height, weight, goals, and medical history
- View their registered email on the dashboard after login

---

## ✨ Features

- **🔐 Authentication**
  - Secure sign-up and login
  - Passwords hashed with `bcrypt`
  
- **📄 Profile Management**
  - Save personal details (name, height, weight, fitness goals, medical conditions)
  - Data stored in MongoDB
    
- **📧 Dashboard Personalization**
  - Displays the logged-in user’s email in the navbar
    
- **💻 Responsive UI**
  - Built with Tailwind CSS for a modern, mobile-friendly design
    
- **⚡ REST API**
  - Node.js + Express backend
  - MongoDB for database persistence

---

## 🛠 Tech Stack

**Frontend**
- React.js
- React Router DOM
- Tailwind CSS
- Context API (Auth management)

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- bcrypt for password hashing
- dotenv for environment variables

---

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | `/api/auth/signup` | Register new user      |
| POST   | `/api/auth/login`  | Login existing user    |
| POST   | `/api/profile`     | Save user profile      |
| GET    | `/api/profile/:id` | Get user profile by ID |

---

## 💡 Future Improvements
- Add JWT-based session handling
- Enable profile picture uploads
- Add fitness progress tracking charts
- Social sharing of achievements

