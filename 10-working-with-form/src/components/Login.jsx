import { useState } from 'react';

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(enteredEmail);
    console.log(enteredPassword);
    setEnteredEmail('');
    setEnteredPassword('');
  }

  function handleReset(e) {
    e.preventDefault();

    setEnteredEmail('');
    setEnteredPassword('');
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat' type='reset'>
          Reset
        </button>
        <button className='button' type='submit'>
          Login
        </button>
      </p>
    </form>
  );
}
