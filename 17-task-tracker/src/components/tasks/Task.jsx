import { Circle, Trash2, CheckCircle } from 'lucide-react';

function Task({ id, text, isCompleted, allTasks, setTasks }) {
  // mark the task as completed
  function toggleTask(id) {
    const updatedTask = allTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTask);
  }

  // delete task handler
  function handleDelete(id) {
    const updatedTask = allTasks.filter((task) => task.id !== id);

    setTasks(updatedTask);
  }

  return (
    <div
      className={`bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 border-2 border-purple-100 animate-slide-up ${
        isCompleted ? 'opacity-70' : ''
      }`}
    >
      <div className='flex items-center gap-4'>
        <button
          onClick={() => toggleTask(id)}
          className='flex-shrink-0 transform hover:scale-110 transition-transform cursor-pointer'
        >
          {isCompleted ? (
            <CheckCircle className='w-8 h-8 text-green-500' />
          ) : (
            <Circle className='w-8 h-8 text-gray-400' />
          )}
        </button>
        <p
          className={`flex-1 text-lg font-medium ${
            isCompleted ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {text}
        </p>
        <button
          onClick={() => handleDelete(id)}
          className='flex-shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-xl transition-all transform hover:scale-110 cursor-pointer'
        >
          <Trash2 className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}

export default Task;
