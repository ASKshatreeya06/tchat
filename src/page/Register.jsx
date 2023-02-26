import React from 'react'

function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className="logo">Tchat</span>
            <span className="title">Register</span>
                <form>
                    <input type="text" placeholder='Display name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='password' />
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src="https://static.thenounproject.com/png/1231023-200.png" alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button type="submit">Sign up</button>
                </form>
                <p>You have an account? login</p>
            </div>

        </div>
    )
}

export default Register
