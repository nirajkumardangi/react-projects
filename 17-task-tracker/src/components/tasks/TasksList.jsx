import Task from './Task';

function TasksList({ tasks, allTasks, setTasks }) {
  return (
    <div className='space-y-3'>
      {tasks.length === 0 && (
        <div className='bg-white/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/30'>
          <p className='text-white text-xl'> Couldn't find any task 🎉</p>
        </div>
      )}
      {tasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          text={task.text}
          isCompleted={task.completed}
          allTasks={allTasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}

export default TasksList;
