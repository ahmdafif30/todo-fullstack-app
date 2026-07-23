import { useState } from "react";
import { createTasks } from "../taskApi";

function TaskForm({fetchTasks}) {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await createTasks(title);
      await fetchTasks()
      console.log(response.data);
      setTitle("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex gap-3 mb-6">
      <input type="text" placeholder="Masukkan Text..." value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1 border rounded-lg px-4 py-2" />

      <button className="bg-blue-500 text-white px-4 rounded-xl hover:bg-blue-700 transition" onClick={handleSubmit}>
        Tambah
      </button>
    </div>
  );
}

export default TaskForm;
