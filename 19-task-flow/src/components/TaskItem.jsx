import { Trash2, Edit2, Check, X } from 'lucide-react';
import { useState } from 'react';

function TaskItem({
  id,
  title,
  completed,
  priority,
  projectId,
  projects,
  setProjects,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedPriority, setEditedPriority] = useState(priority);

  // ✅ Delete task
  function handleDeleteTask() {
    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? { ...project, tasks: project.tasks.filter((task) => task.id !== id) }
        : project
    );
    setProjects(updatedProjects);
  }

  // ✅ Toggle completion checkbox
  function handleToggleComplete() {
    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
          }
        : project
    );
    setProjects(updatedProjects);
  }

  // ✅ Enable edit mode
  function handleEditTask() {
    setIsEdit(true);
  }

  // ✅ Save edits
  function handleSaveEdit() {
    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === id
                ? {
                    ...task,
                    title: editedTitle.trim() || task.title,
                    priority: editedPriority,
                  }
                : task
            ),
          }
        : project
    );

    setProjects(updatedProjects);
    setIsEdit(false);
  }

  // ✅ Cancel edits
  function handleCancelEdit() {
    setEditedTitle(title);
    setEditedPriority(priority);
    setIsEdit(false);
  }

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={completed}
        onChange={handleToggleComplete}
      />

      {isEdit ? (
        <div className='task-edit-form'>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <select
            id='priority'
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          >
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
        </div>
      ) : (
        <>
          <span className={`task-text ${completed ? 'completed' : ''}`}>
            {title}
          </span>
          <span className={`priority-badge ${priority}`}>{priority}</span>
        </>
      )}

      {/* Action buttons */}
      {isEdit ? (
        <>
          <button className='btn-icon check' onClick={handleSaveEdit}>
            <Check size={16} />
          </button>
          <button className='btn-icon cancel' onClick={handleCancelEdit}>
            <X size={16} />
          </button>
        </>
      ) : (
        <>
          <button className='btn-icon edit' onClick={handleEditTask}>
            <Edit2 size={16} />
          </button>
          <button className='btn-icon delete' onClick={handleDeleteTask}>
            <Trash2 size={16} />
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
