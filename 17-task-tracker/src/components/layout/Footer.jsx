function Footer({ tasks }) {
  let pendingTask = tasks.filter((item) => !item.completed).length;
  let completedTask = tasks.filter((item) => item.completed).length;
  let totalTasks = tasks.length;
  return (
    <div className='text-center mt-12'>
      <p className='text-white/80 text-sm'>
        Total Tasks: {totalTasks} | Completed: {completedTask} | Pending: {pendingTask}
      </p>
    </div>
  );
}

export default Footer;
