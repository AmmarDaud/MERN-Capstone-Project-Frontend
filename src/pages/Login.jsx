import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      if (res.data.token) {
        login(res.data.token);
        navigate("/");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login request failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 rounded-lg shadow-lg p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
