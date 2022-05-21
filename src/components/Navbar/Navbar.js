import React from 'react'
import { Link, Switch } from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

const Navbar = () => {
    return(
        <div>
            <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                Contact
                </NavLink>
                <NavLink to="/upload" activeStyle>
                Upload
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signup"> Signup </NavBtnLink>
            </NavBtn>
            </Nav>  

        
        </div>
    )

}

export default Navbar;

