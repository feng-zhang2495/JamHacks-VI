import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { CreateUserAccount } from '../authentication/Authentication'
import { Navigate } from 'react'
import { LoggedIn, useAuth } from '../authentication/Authentication'

const Signup = () => {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await CreateUserAccount(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const HandleSubmit = (event) => {
    event.preventDefault();

  }


  return (
    <div className = "form-content-right" onSubmit={HandleSubmit}>
            <form className= "form">
              <h1> Signup Now </h1>
              <div className = "form-inputs">
                <label htmlFor = "email" className="form-label"> 
                  Email 
                </label>

                <input
                    id = 'email' 
                    type = 'email'
                    name='email'
                    className='form-input'
                    placeholder="Please enter your email"
                    ref = {emailRef}
                  />
              </div>
              <div className = "form-inputs">
                <label htmlFor = "password" className="form-label">
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

              <div className = "form-inputs">
                <label htmlFor = "password2"
                className="form-label">
                  Confirm Password 
                </label>
                  <input 
                    id = 'password2'
                    type = 'password2'
                    name='password2'
                    className='form-input'
                    placeholder="Please enter your password again"
                  />

                  <button 
                  onClick={handleSignup}>Sign Up</button>
              </div>    
            </form>

            <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </ div > 
  )
}




export default Signup
