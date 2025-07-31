import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", form);

      if (res.status === 201 || res.status === 200) {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        alert(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert(err.response?.data?.message || "Registration request failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 rounded-lg shadow-lg p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

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
          autoComplete="new-password"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}