import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button>Login</button>
        <p>This is an Error </p>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>


    </div>
  )
}

export default Register