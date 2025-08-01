🎓 Vision Suite (TASKER) – A Modern Project Management App
Vision Suite (Tasker) is a modern, full-stack MERN project management application designed for individuals and small teams to plan, organize, and track projects with ease.

From personal to-do lists to collaborative team projects, Vision Suite enables users to:
 • Create projects
 • Manage tasks efficiently
 • Maintain productivity
 • Work securely with full authentication

Built with an accessibility-first approach, it ensures a smooth experience for all users.

🚢 Live Deployment
Frontend on Render → Live Link

Backend on Render → Live Link

🛠️ Tech Stack
🚀 Core Stack
• MERN Stack
• MongoDB – Database
• Mongoose – ODM for MongoDB
• Express.js – Backend framework
• Node.js – Runtime
• React + Vite – Frontend framework

🎨 UI & Styling
Tailwind CSS

🔐 Authentication & Security
• JWT – Token-based authentication
• bcrypt – Password hashing
• CORS – Secure cross-origin access
• dotenv – Environment variable management

🧰 Dev Tools & Utilities
• Axios (HTTP req)
• Nodemon (Hot reload for backend)
• ESLint + Prettier (Formatting)

🧪 Testing & Debugging
Postman 

☁️ Deployment
• Backend → Render
• Frontend → Netlify
• Database → MongoDB Atlas

 Backend File Structure

Backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
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

Frontend/
Tasker/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/
    │   ├── logo.jpeg
    │   └── react.svg
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
    │   └── ProtectedRoute.jsx
    ├── api/
    │   └── axiosInstance.js
    └── styles/
        └── index.css

🌟 Features
🗂 Project Management – Create projects and manage it.

✅ Task Management – Track tasks with status updates (To Do → In Progress → Done)

🔐 Secure Authentication – JWT-based login & role protection

📱 Responsive UI – Optimized for desktop, tablet, and mobile


🧑‍💻 Author
Created by Ammar Daud Khan.
Feedback are welcome!

📄 License
This project is licensed under the MIT License.