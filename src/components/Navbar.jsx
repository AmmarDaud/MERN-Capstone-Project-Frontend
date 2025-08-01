import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Home");
  };

  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        <div className="w-24" aria-hidden="true" />

          <Link
            to="/"
            className="text-xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Project Management
          </Link>

        <div className="flex gap-4 w-fit items-center justify-end">
          <Link to="/Home" className="hover:underline">
            Home
          </Link>

          {user ? (
            <>
              <Link to="/dashboard" className="hover:underline">
                | Dashboard |
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
