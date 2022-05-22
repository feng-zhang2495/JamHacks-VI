import React from 'react'
import { Link, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import {getAuth} from 'firebase/auth'
import { LogOut } from '../../authentication/Authentication'
import Logo from '../../Images/logo.png'
import '../Navbar/Navbar.css'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

const auth = getAuth();

const Navbar = () => {
    const [user] = useAuthState(auth);
    if(user == null) {
    return(
        <div>
            <Nav>
            <NavLink to="/" className="navbarlogo">
                <img src= {Logo} alt= "This is a Logo" /> 
            </NavLink>
            <Bars />
            <NavMenu>
                {/* <NavLink to="/about" activeStyle>
                About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                Contact
                </NavLink>
                <NavLink to="/upload" activeStyle>
                Upload
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signup"> Signup </NavBtnLink>
                <NavBtnLink to="/login"> Login </NavBtnLink>
            </NavBtn>
            </Nav>  

        
        </div>
    )
    } else {
        console.log(user.providerData);
    return(
        <div>
            <Nav>
            <NavLink to="/" className="navbarlogo">
                <img src= {Logo} alt= "This is a Logo" />
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
                <NavBtnLink to="/profile"> Hello {user.providerData[0].displayName}</NavBtnLink>
                <NavBtnLink to="/" onClick={LogOut}>LogOut</NavBtnLink>
            </NavBtn>
            </Nav>  

            

        </div>
    )
    }

}

export default Navbar;

