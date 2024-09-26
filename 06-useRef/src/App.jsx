import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title='Easy' targetTime='1' />
        <TimerChallenge title='Moderate' targetTime='5' />
        <TimerChallenge title='Intermediate' targetTime='10' />
        <TimerChallenge title='Advanced' targetTime='15' />
      </div>
    </>
  );
}

export default App;
