import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { CreateUserAccount } from '../authentication/Authentication'
import { Navigate } from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { LoggedIn, useAuth, GoogleAuthProvider } from '../authentication/Authentication'


// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());



const auth = getAuth();

const Signup = () => {
  const [ loading, setLoading ] = useState(false);
  const [user, setUser] = useState(() => auth.currentUser);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await CreateUserAccount(emailRef.current.value, passwordRef.current.value);
      console.log(auth);
      updateProfile(auth.currentUser, {
        displayName: usernameRef.current.value
      })
    } catch {
      alert("Error!");
    }
    console.log(auth.currentUser.providerData);
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
                  <label htmlFor = "text"
                  className="form-label">
                    Username 
                  </label>
                    <input
                      id = 'text'
                      type = 'text'
                      name='text'
                      className='form-input'
                      placeholder="Please enter your username"
                      ref={usernameRef}
                    />
                </div>
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
                    type = 'password'
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