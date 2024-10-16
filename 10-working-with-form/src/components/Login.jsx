import { useState } from 'react';

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  console.log(enteredEmail);
  console.log(enteredPassword);

  return (
    <form>
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
        <button className='button button-flat'>Reset</button>
        <button className='button' onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
