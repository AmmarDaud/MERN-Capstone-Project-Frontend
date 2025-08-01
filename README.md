🎓 Vision Suite(TASKER)– A Modern Project Management App
Vision Suite is a modern, full-stack MERN project management application designed for individuals and small teams to plan, organize, and track projects with ease.
From personal to-do lists to collaborative team projects and it allows users to create projects, manage tasks, and maintain productivity all in one place with succesfully with fully Security authenticated.

Built with a accessibility-focused approach, Task Management ensures a smooth experience for all users.

🚢 Live Deployment
Frontend on Render → Live Link

Backend on Render → Live Link

🛠️ Tech Stack

🚀 Core Stack
Stack MERN → Database MongoDB • ODM Mongoose • Backend Express.js • Node.js • Frontend React • Build Vite

🎨 UI & Styling
UI Tailwind CSS

🔐 Authentication & Security
Authentication JWT

Secutiry bcrypt

Middleware CORS

ENV dotenv

🧰 Dev Tools & Utilities
Http Axios

DEV Nodemon

Linter ESLint

Formatter Prettier

🧪 Testing & Debugging
Postman 

☁️ Deployment
Deploy Render

Deploy Frontend Netlify

DB Host MongoDB Atlas

 Backend File Structure

backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── Project.js
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   └── server.js
├── .env.example
├── package.json
└── package-lock.json

 Frontend File Structure

frontend/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/
    |   ├── logo.jpeg
    |   └── react.svg
    ├── context/
    │   └── AuthContext.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Dashboard.jsx
    │   └── Project.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   └── ProtectedRoute.jsxx
    ├── api/
    │   └── axios Instance
    └── styles/
        └── index.css
        
🧑‍💻 Author
Created by Ammar Daud Khan.
Feedback are welcome!

📄 License
This project is licensed under the MIT License.