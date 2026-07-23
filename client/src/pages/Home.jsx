import { useEffect, useState } from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import { getTasks } from "../taskApi";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditingTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-4xl text-center font-bold mb-8">ToDo List App</h1>
        <TaskForm fetchTasks={fetchTasks} />
        <TaskList 
        tasks={tasks} 
        fetchTask={fetchTasks} 

        editingId={editingId} 
        setEditingId={setEditingId}
         
        editTitle={editTitle} 
        setEditTitle={setEditingTitle} />
      </div>
    </div>
  );
}

export default Home;
