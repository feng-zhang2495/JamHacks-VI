import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import { SignUserIn } from '../authentication/Authentication'
import { Navigate } from 'react'
import { useAuth } from '../authentication/Authentication'
import './Login.css'
import './TopSection.css';
import logo from '../Images/tutor.png'

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
      <div className = "form-content-right">
        <img src={logo} id="background-img" alt="This is the background" />
          <div class="lfc">
          <form className= "form" onSubmit={HandleSubmit}>
                <h1 id="login"> Log in </h1>
                <div className = "form-inputs">
                  <label htmlFor = "email"
                  className="form-label">
                    <u>Email</u> 
                  </label>

                  <br></br>

                    <input
                      id = 'email' 
                      type = 'email'
                      name='email'
                      className='form-input'
                      placeholder="Please enter your email"
                      ref={emailRef}
                    />

                </div>
                <div className = "form-inputs">
                  <label htmlFor = "password"
                  className="form-label">
                      <u>Password</u> 
                  </label>
                  
                  <br></br>
                  
                    <input 
                      id = 'password'
                      type = 'password'
                      name='password'
                      className='form-input'
                      placeholder="Please enter your password"
                      ref={passwordRef}
                    />
                    
                    
                </div>
                <p className="NoAccount">Don't have an account? <Link to="/signup">Sign up here</Link></p>
                <button style={{buttonStyle}} onClick={handleLogin} class="submitButton">Sign In</button>
                
              </form>
          </div>

          <div class="rfc">
            <h1 className="slogan">A new Immersive Tutoring<br/>Experience Awaits YOU.</h1>
          </div>
              
      </ div > 
    )
  }
  
  
  
  
  export default Login
  