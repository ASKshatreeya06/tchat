import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
            <div className='formWrapper'>
            <span className="logo">Tchat</span>
            <span className="title">Register</span>
                <form>
                    
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='password' />
                    
                    <button type="submit">Sign in </button>
                </form>
                <p>You don't have an account? Register</p>
            </div>

        </div>
  )
}

export default Login
