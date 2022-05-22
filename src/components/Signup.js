import React from 'react'
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { CreateUserAccount } from '../authentication/Authentication'
import { Navigate } from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { LoggedIn, useAuth, GoogleAuthProvider } from '../authentication/Authentication'
import './Signup.css'
import './TopSection.css';
import logo from '../Images/tutor.png'

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
    <Navbar/>
  }

  const HandleSubmit = (event) => {
    event.preventDefault();

  }


  return (
    <div>
      <img src={logo} id="back-img" alt="This is the background" />
    <div className = "form-content" onSubmit={HandleSubmit}>
       
      <div className='lc'>
      <form className= "form"> 



              <h1 id="sign-up"> Sign Up</h1>
              <div className = "form-inp">
                  <label htmlFor = "text"
                  className="form-lab">
                    <u>Username</u><br/>
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
              <div className = "form-inp">
                <label htmlFor = "email" className="form-lab"> 
                  <u>Email</u> <br></br>
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
              <div className = "form-inp">
                <label htmlFor = "password" className="form-lab">
                  <u>Password</u><br/>
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

              <div className = "form-inp">
                <label htmlFor = "password2"
                className="form-lab">
                  <u>Confirm Password</u> 
                </label>
                  <input 
                    id = 'password2'
                    type = 'password'
                    name='password2'
                    className='form-input'
                    placeholder="Please enter your password again"
                  />

                  <p id="already-account">Already have an account? <Link to="/login">Log in here</Link></p>
                  <button onSubmit={handleSignup} id="sign-up-button">Sign Up</button>
              </div>    

            </form>

      </div>
      <div className='rc'>
        <h1 id='signup-text'>Start Using Headstart Tutors <br></br> for a new, Effective and <br></br>Immersive Tutoring Experience!</h1>
      </div>
            
    </ div > 
    </div>
    
  )
}


export default Signup