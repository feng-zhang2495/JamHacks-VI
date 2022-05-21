import React from "react";
import Navbar from "./Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopSection from "./TopSection";
import { Navigate } from 'react'

const Mainpage = () => {
    return(
      <div> 
        <TopSection/>
      </div>
    )
       
}

export default Mainpage