import { useState, useRef } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  const inputRef = useRef();

  function handleSubmit() {
    setEnteredPlayerName(inputRef.current.value);
  }

  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'} </h2>
      <p>
        <input
          type='text'
          ref={inputRef}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
