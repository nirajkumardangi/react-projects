import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const timer = useRef(null);
  const dialog = useRef(null);

  function handleStart() {
    setTimeExpired(false);
    
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current?.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
      <section className='challenge'>
        <h2>{title}</h2>
        {timeExpired && <p>You lost</p>}
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted && !timeExpired ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted && !timeExpired ? 'active' : undefined}>
          {timerStarted && !timeExpired
            ? 'Time is running...'
            : 'Time is completed'}
        </p>
      </section>
    </>
  );
}
