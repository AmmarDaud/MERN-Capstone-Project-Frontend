# 🎓 Vision Suite (TASKER) – A Modern Project Management App
Vision Suite (Tasker) is a modern, full-stack MERN project management application designed for individuals and small teams to plan, organize, and track projects with ease.
From personal to-do lists to collaborative team projects, Vision Suite enables users to:

 • Create projects
 • Manage tasks efficiently
 • Maintain productivity
 • Work securely with full authentication

Built with an accessibility-first approach, it ensures a smooth experience for all users.

##  Live Deployment
[View Frontend on Netlify](https://visionsuitefrontend.netlify.app/home)

[View Backend on Render](https://mern-capstone-project-backend.onrender.com/)

###  Core Stack
![MERN Stack](https://img.shields.io/badge/Stack-MERN-3e863d?style=flat-square&logo=mongodb&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-880000?style=flat-square)
![Express](https://img.shields.io/badge/Backend-Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

###  UI & Styling
![Tailwind CSS](https://img.shields.io/badge/UI-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

###  Authentication & Security
![JWT](https://img.shields.io/badge/Auth-JWT-FFB400?style=flat-square&logo=jsonwebtokens&logoColor=black)
![bcrypt](https://img.shields.io/badge/Security-bcrypt-ef5c00?style=flat-square)
![CORS](https://img.shields.io/badge/Middleware-CORS-blue?style=flat-square)
![dotenv](https://img.shields.io/badge/Env-dotenv-green?style=flat-square)

###  Dev Tools & Utilities
![Axios](https://img.shields.io/badge/HTTP-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Nodemon](https://img.shields.io/badge/Dev-Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=black)
![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Formatter-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)

###  Testing & Debugging
![Postman](https://img.shields.io/badge/API_Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)

### ☁ Deployment
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat-square&logo=render&logoColor=black)
![MongoDB Atlas](https://img.shields.io/badge/DB_Host-MongoDB_Atlas-11B048?style=flat-square&logo=mongodb&logoColor=white)

### Backend file structure

```

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

```

### Frontend file structure
```
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
   ``` 


## 🧑🏿‍💻 Author

Created by [Ammar Daud Khan](https://github.com/AmmarDaud)
Feedback are welcome!
