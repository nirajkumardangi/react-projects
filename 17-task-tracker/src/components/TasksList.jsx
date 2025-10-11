import Task from './Task';

function TasksList({ tasks }) {
  return (
    <div className='space-y-3'>
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} isCompleted={task.completed} />
      ))}
    </div>
  );
}

export default TasksList;
