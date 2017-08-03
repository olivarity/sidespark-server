import React from 'react';

function Login({ loginHandler }) {
  return (
    <div>
      <h1>Sign In</h1>
      <button className="btn btn-primary" onClick={loginHandler}>Click me!</button>
    </div>
  )
}

export default Login
