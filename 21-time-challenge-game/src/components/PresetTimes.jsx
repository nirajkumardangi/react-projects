import TimeCard from './TimeCard';

function PresetTimes({ onStartTimer }) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <TimeCard duration={3} onStartTimer={onStartTimer} />
      <TimeCard duration={5} onStartTimer={onStartTimer} />
      <TimeCard duration={5} onStartTimer={onStartTimer} />
    </div>
  );
}

export default PresetTimes;
