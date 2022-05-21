import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import { SignUserIn } from '../authentication/Authentication'
import { LogOut } from '../authentication/Authentication'
import { Navigate } from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

function SignInBtn() {
    return <NavBtnLink to="/signup"> Signup </NavBtnLink>;
}

function LogOutBtn() {
    return <NavBtn onClick={LogOut}>Sign Up</NavBtn>;
}