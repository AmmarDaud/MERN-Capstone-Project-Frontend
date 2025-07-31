import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login.JSX";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProjectPage from "./pages/Project.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/"
            element={ 
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute> }/>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects/:id"
            element={
              <ProtectedRoute>
                <ProjectPage />
              </ProtectedRoute>
            }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}