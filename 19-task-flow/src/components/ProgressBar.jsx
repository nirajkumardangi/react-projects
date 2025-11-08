function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className='progress-container'>
      <div className='progress-bar-bg'>
        <div
          className='progress-bar-fill'
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className='progress-text'>{percentage}%</p>
    </div>
  );
};

export default ProgressBar;
