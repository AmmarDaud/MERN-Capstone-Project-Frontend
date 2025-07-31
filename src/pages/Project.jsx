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

  if (loading) return <p className="text-center mt-10">Loading tasks...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-red-500">
      <h1 className="text-2xl font-bold mb-4 text-center">Project Tasks</h1>

      <form onSubmit={createTask} className="mb-6">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <description
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded w-full"
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.length === 0 && <p>No tasks yet.</p>}
        {tasks.map((task) => (
          <li
            key={task._id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{task.title}</h2>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">Status: {task.status}</p>
            </div>
            <div className="flex gap-2">
              <select
                value={task.status}
                onChange={(e) => updateStatus(task._id, e.target.value)}
                className="border p-1"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
