import { deleteTask, updateTaskById } from "../taskApi";

function TaskItem({ id, title, fetchTask, editingId, setEditingId, editTitle, setEditTitle }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Apakah kamu ingin menghapus task: \n\n "${title}"?`);
    if (!confirmDelete) {
      return;
    }
    try {
      await deleteTask(id);
      await fetchTask();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setEditingId(id);
    setEditTitle(title);
  };

  const handleSave = async () => {
    try {
      await updateTaskById(id, editTitle);

      await fetchTask();

      setEditingId(null);
      setEditTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditTitle("");
  };

  return (
    <div className="bg-white flex justify-between rounded-xl px-4 py-3 items-center">
      {editingId === id ? <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="flex-1 border rounded-lg px-3 py-2 mr-4" /> : <span>{title}</span>}
      <div className="flex gap-3">
        {editingId === id ? (
          <>
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-4 py-3 transition" onClick={handleSave}>
              Simpan
            </button>
            <button className="bg-red-500 hover:bg-red-700 rounded-lg text-white px-4 py-3 transition" onClick={handleCancel}>
              Batal
            </button>
          </>
        ) : (
          <>
            <button className="bg-orange-400 hover:bg-orange-600 rounded-lg text-white px-4 py-3 transition" onClick={handleEdit}>
              Edit
            </button>

            <button className="bg-red-500 hover:bg-red-700 rounded-lg text-white px-4 py-3 transition" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
