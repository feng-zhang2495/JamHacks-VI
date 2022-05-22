import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { CreateUserAccount } from '../authentication/Authentication'
import { Navigate } from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { LoggedIn, useAuth, GoogleAuthProvider } from '../authentication/Authentication'

const auth = getAuth();

const Profile = () => {
  //alert(user.providerData[0].email);
  // console.log(user.providerData[0].displayName);
  // alert(user.providerData[0].email);
    return (
      <div>
        <h1>Hi, {auth.currentUser.providerData[0].displayName}</h1>
        <h2>Email: {auth.currentUser.providerData[0].email}</h2>
      </div>

//  {user.providerData[0].displayName}
// {user.providerData[0].email}
      
    )
  }
  
export default Profile  
