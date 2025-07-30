import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch all projects for logged-in user
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
  }, []);

  // Handle project creation
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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Projects</h1>

      <form
        onSubmit={handleCreateProject}
        className="bg-sky-500/50 shadow-md rounded p-4 mb-6"
      >
        <h2 className="text-xl font-semibold mb-2">Create New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          className="border p-2 w-full mb-2"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Project Description"
          className="border p-2 w-full mb-2"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Project
        </button>
      </form>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li
              key={project._id}
              className="p-4 bg-white dark:bg-gray-600 shadow rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="dark:text-white">{project.description}</p>
              </div>
              <button
                onClick={() => navigate(`/project/${project._id}`)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
