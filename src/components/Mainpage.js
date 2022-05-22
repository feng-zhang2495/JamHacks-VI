import React from "react";
import Navbar from "./Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopSection from "./TopSection";
import { Navigate } from 'react'
import Footer from './Footer'

const Mainpage = () => {
    return(
      <div> 
        <TopSection/>
        <div className="usage">
        <Footer/>
        </div>
      </div>
    )
       
}

export default Mainpage