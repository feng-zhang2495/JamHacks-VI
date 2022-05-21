import React from 'react'
import { Link, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import {getAuth} from 'firebase/auth'
import { LogOut } from '../../authentication/Authentication'
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
                <NavBtnLink to="/profile" >Hello {user.providerData[0].displayName}</NavBtnLink>
                <NavBtnLink to="/" onClick={LogOut}>LogOut</NavBtnLink>
            </NavBtn>
            </Nav>  

        
        </div>
    )
    }

}

export default Navbar;

