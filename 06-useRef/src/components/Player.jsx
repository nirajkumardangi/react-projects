import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <section id='player'>
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'} </h2>
      <p>
        <input type='text' value={enteredPlayerName} onChange={handleChange} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
