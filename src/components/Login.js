import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import { SignUserIn } from '../authentication/Authentication'
import { Navigate } from 'react'
import { useAuth } from '../authentication/Authentication'

const Login = () => {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    
    

    async function handleLogin() {
        setLoading(true);
        try {
          await SignUserIn(emailRef.current.value, passwordRef.current.value);
          console.log('Logged In');
        } catch {
          alert("Error!");
        }
        setLoading(false);
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
    }
    const buttonStyle = {
        width: "15%",
        height: "10%",
        padding: "5%"
    }


    return (
      <div classname = "form-content-right">
              <form className= "form" onSubmit={HandleSubmit}>
                <h1> Login </h1>
                <div className = "form-inputs">
                  <label htmlFor = "email"
                  className="form-label">
                    Email 
                  </label>
                    <input
                      id = 'email' 
                      type = 'email'
                      name='email'
                      className='form-input'
                      placeholder="Please enter your email"
                      ref={emailRef}
                    />
                </div>
                <div className = "form-inputs">``
                  <label htmlFor = "password"
                  className="form-label">
                    Password 
                  </label>
                    <input 
                      id = 'password'
                      type = 'password'
                      name='password'
                      className='form-input'
                      placeholder="Please enter your password"
                      ref={passwordRef}
                    />
                    
                    
                </div>

                <button style={{buttonStyle}} onClick={handleLogin}>Sign In</button>

                <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
              </form>
      </ div > 
    )
  }
  
  
  
  
  export default Login
  