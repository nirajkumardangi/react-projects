function GlobalStats({ projects }) {
  const totalTasks = projects.reduce(
    (sum, project) => sum + project.tasks.length,
    0
  );

  const completedTasks = projects.reduce(
    (sum, project) => sum + project.tasks.filter((t) => t.completed).length,
    0
  );

  const highPriorityPendingTasks = projects.reduce(
    (sum, project) =>
      sum +
      project.tasks.filter((t) => t.priority === 'high' && !t.completed).length,
    0
  );

  return (
    <section className='card card-padding'>
      <h2 className='section-title'>Global Statistics</h2>
      <div className='stats-container'>
        <div className='stat-box blue'>
          <div className='stat-number'>{totalTasks}</div>
          <div className='stat-label'>Total Tasks</div>
        </div>

        <div className='stat-box green'>
          <div className='stat-number'>{completedTasks}</div>
          <div className='stat-label'>Completed Tasks</div>
        </div>

        <div className='stat-box red'>
          <div className='stat-number'>{highPriorityPendingTasks}</div>
          <div className='stat-label'>High Priority Pending</div>
        </div>
      </div>
    </section>
  );
}

export default GlobalStats;
