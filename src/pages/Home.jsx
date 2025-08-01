import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpeg"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white p-6">
      <img
        src={logo}
        alt="Company Logo"
        className="w-32 h-32 mb-6 rounded-full shadow-lg"
      />

      <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4 text-center drop-shadow-md">
        Vision Suite
      </h1>

      <p className="text-lg md:text-xl text-cyan-200 italic text-center max-w-xl mt-2">
        "Turning your visions into impactful solutions & Lets make it happen together."
      </p>

      <div className="mt-12">
        <p className="text-white">
          New here?{" "}
          <Link
            to="/register"
            className="text-cyan-300 hover:underline font-semibold"
          >
            Register now
          </Link>
        </p>
      </div>
    </main>
  );
}