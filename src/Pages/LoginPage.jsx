import React from 'react'
import credisynclogo from '../Images/credisynclogo.png';
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='wrapper'>
     <form action="">
        <img id="logo" src={credisynclogo} alt="logo" />   
        <h1>SIGN IN</h1>

        <label>Email</label>
        <div className='email-input'>
            <input type="text" placeholder='Enter your email' required/>
        </div>

        <label>Password</label>
        <div className='password-input'>
            <input type="password" placeholder='Enter your password' required/>
        </div>

        <div className='forgot-link'>
            <a href='#'>Forgot your password?</a>
        </div>
        
        <button type="submit">Sign In</button>

        <div className='signup-link'>
            <a href="#">Don't have an account? Sign up</a>
        </div>
     </form>
    </div>
  )
}

export default LoginPage
