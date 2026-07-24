import TaskItem from "./TaskItem";

function TaskList({tasks, fetchTask,editingId, setEditingId, editTitle, setEditTitle}) {
  return (
    <div className="space-y-3">
        {tasks.map((data) => (
            <TaskItem
            key={data.id}
            id={data.id}
            title={data.title}
            status = {data.status}

            fetchTask = {fetchTask}

            editingId={editingId} 
            setEditingId={setEditingId}

            editTitle={editTitle}
            setEditTitle={setEditTitle}
             />
        ))}
    </div>
  )
}

export default TaskList;
