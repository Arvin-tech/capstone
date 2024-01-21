import React from 'react'
import credisynclogo from '../Images/credisynclogo.png';
import './LoginPage.css'

const LoginPage = () => {
  
  return (
    <div className='wrapper'>
     <form action="">
        <img id="logo" src={credisynclogo} alt="logo" />   
        <h1>SIGN IN</h1>

       
        <div className='email-input'>
          <label>Email</label>                                                                                                             
          <input type="text" placeholder='Enter your email' required/>
        </div>

        <div className='password-input'>
          <label>Password</label>
          <input type="password" placeholder='Enter your password' required/>
        </div>

        <div className='forgot-link'>
            <a href='#'>Forgot your password?</a>
        </div>
        
        <button type="submit">SIGN IN</button>

        <div className='signup-link'>
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
     </form>
    </div>
  )
}

export default LoginPage
