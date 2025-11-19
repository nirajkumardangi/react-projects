import { useRef, useState } from 'react';

import Header from './components/Header';
import GameScreen from './components/GameScreen';
import PresetTimes from './components/PresetTimes';
import CustomTime from './components/CustomTime';
import Instructions from './components/Instructions';
import ResultModal from './components/ResultModal';

function App() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const targetTimeRef = useRef();
  const startTimeRef = useRef();
  const stopTimeRef = useRef();

  function handleStart(targetTime) {
    // store selected duration
    targetTimeRef.current = Number(targetTime);

    // record start timestamp
    startTimeRef.current = performance.now();

    // clear old timers
    clearTimeout(timer.current);

    // after target time, consider "auto expiring"
    timer.current = setTimeout(() => {
      stopTimeRef.current = performance.now();
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);

    // record the exact moment user pressed STOP
    stopTimeRef.current = performance.now();

    setTimerStarted(false);
    setTimerExpired(true);
  }

  function closeModal() {
    setTimerExpired(false);
    setTimerStarted(false);
  }

  // calculate timing results
  let timeDiff = 0;
  let result = '';

  if (timerExpired) {
    const actual = (stopTimeRef.current - startTimeRef.current) / 1000;
    timeDiff = +(actual - targetTimeRef.current).toFixed(2); // early = negative

    if (Math.abs(timeDiff) <= 0.5) result = 'Perfect';
    else if (Math.abs(timeDiff) <= 1) result = 'Good';
    else result = 'Failed';
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        <Header />

        {/* Game area */}
        <div className='bg-white rounded-3xl shadow-2xl p-8'>
          {timerStarted && (
            <GameScreen
              onStopTimer={handleStop}
              targetTime={targetTimeRef.current}
            />
          )}

          {!timerStarted && (
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
                Select Challenge Duration
              </h2>

              <PresetTimes onStartTimer={handleStart} />
              <CustomTime onStartTimer={handleStart} />
            </div>
          )}
        </div>

        <Instructions />
      </div>

      {timerExpired && (
        <ResultModal
          isOpen={timerExpired}
          onClose={closeModal}
          result={result}
          timeDiff={timeDiff}
          targetTime={targetTimeRef.current}
        />
      )}
    </div>
  );
}

export default App;
