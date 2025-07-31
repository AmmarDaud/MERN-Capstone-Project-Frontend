import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchProjects();
  }, [token]);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProject),
      });
      const data = await res.json();
      setProjects([...projects, data]);
      setNewProject({ name: "", description: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black p-8">
      <div className="max-w-4xl mx-auto bg-blue-800 bg-opacity-80 rounded-xl shadow-lg p-8 text-white">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide drop-shadow-lg">
          Your Projects
        </h1>

        <form
          onSubmit={handleCreateProject}
          className="bg-blue-700 bg-opacity-70 rounded-lg p-6 mb-10 shadow-inner"
          aria-labelledby="create-project-heading"
        >
          <h2
            id="create-project-heading"
            className="text-2xl font-semibold mb-5 border-b border-blue-600 pb-2"
          >
            Create New Project
          </h2>

          <label htmlFor="project-name" className="block mb-2 font-semibold">
            Project Name <span className="text-red-400">*</span>
          </label>
          <input
            id="project-name"
            type="text"
            placeholder="Enter project name"
            className="w-full rounded-md p-3 mb-5 bg-blue-900 bg-opacity-60 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            required
            aria-required="true"
          />

          <label htmlFor="project-description" className="block mb-2 font-semibold">
            Project Description
          </label>
          <textarea
            id="project-description"
            placeholder="Enter project description"
            className="w-full rounded-md p-3 mb-5 bg-blue-900 bg-opacity-60 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-y transition"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-md shadow-lg transition focus:outline-none focus:ring-4 focus:ring-cyan-400"
          >
            Create Project
          </button>
        </form>

        {loading ? (
          <p className="text-center text-cyan-200 animate-pulse">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-cyan-300 italic">No projects found.</p>
        ) : (
          <ul className="space-y-6" role="list" aria-label="List of projects">
            {projects.map((project) => (
              <li
                key={project._id}
                className="flex justify-between items-center bg-blue-700 bg-opacity-80 rounded-lg p-5 shadow-md hover:bg-blue-600 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-wide drop-shadow">
                    {project.name}
                  </h3>
                  <p className="text-cyan-200 mt-1">{project.description}</p>
                </div>
                <button
                  onClick={() => navigate(`/project/${project._id}`)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-blue-900 font-semibold px-5 py-2 rounded-lg shadow-md transition focus:outline-none focus:ring-4 focus:ring-cyan-300"
                  aria-label={`View details of project ${project.name}`}
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}