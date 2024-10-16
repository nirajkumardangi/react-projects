import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleChange(initializer, value) {
    setFormData((prevData) => ({ ...prevData, [initializer]: value }));
  }

  console.log(formData);

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
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
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
