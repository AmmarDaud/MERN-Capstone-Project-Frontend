import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api.js";

export default function ProjectPage() {
  const { id } = useParams(); // project ID from URL
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch tasks when page loads
  useEffect(() => {
    API.get(`/projects/${id}/tasks`)
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // Create a new task
  const createTask = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`/projects/${id}/tasks`, {
        title,
        description,
        status: "To Do",
      });
      setTasks([...tasks, res.data]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  // Update task status
  const updateStatus = async (taskId, status) => {
    try {
      await API.put(`/projects/${id}/tasks/${taskId}`, { status });
      setTasks(tasks.map((t) => (t._id === taskId ? { ...t, status } : t)));
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await API.delete(`/projects/${id}/tasks/${taskId}`);
      setTasks(tasks.filter((t) => t._id !== taskId));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10 text-cyan-400">Loading tasks...</p>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black p-8">
      <div className="max-w-3xl mx-auto p-8 bg-blue-800 bg-opacity-70 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md">
           Tasks
        </h1>

        {/* Add Task Form */}
        <form
          onSubmit={createTask}
          className="mb-8 bg-blue-700 bg-opacity-60 p-6 rounded-lg shadow-inner"
        >
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-blue-900 bg-opacity-50 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-5 rounded-lg bg-blue-900 bg-opacity-50 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-y"
            rows={3}
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Add Task
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-4">
          {tasks.length === 0 && (
            <p className="text-center text-cyan-300 italic">No tasks yet. Add one above!</p>
          )}

          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center bg-blue-700 bg-opacity-70 p-5 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              <div>
                <h2 className="text-lg font-bold text-white">{task.title}</h2>
                <p className="text-cyan-200">{task.description}</p>
                <p className="text-sm text-cyan-300 mt-1">Status: {task.status}</p>
              </div>

              <div className="flex gap-2">
                <select
                  value={task.status}
                  onChange={(e) => updateStatus(task._id, e.target.value)}
                  className="border border-cyan-400 rounded-lg px-3 py-1 text-white">
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
