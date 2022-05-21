import React from 'react'
import './TopSection.css';
import logo from '../Images/tutor.png'
import { Link } from 'react-router-dom'

function TopSection() {
  return (
    <div className='top-container'>
        <img src={logo} alt="This is the background" />
        <h1> LEARNING TOGETHER </h1>
        <Link to="/signup"><button>Join Us Now </button></Link>

        </div>
  )
}


export default TopSection
