import React from 'react'
import './TopSection.css';
import logo from '../Images/tutor.png'
import { Link } from 'react-router-dom'
import styles from "./Button.css"


function TopSection() {
  return (
     <div className='top-container'>
        <img src={logo} alt="This is the background" />
        <h1 id="Letters"> LEARNING TOGETHER </h1>
        <h1 id="Letters2">Providing a better learning space for Students!</h1>
        <Link to='/signup' className='kekw'>
          <button className='btnlarge' style={styles.btnlarge} id="middleBTN">
            Join Now
          </button>  
        </Link>
        <div className='column'>
          <div className= 'leftcolumn'>
            Easier and more efficient communication between tutors and students.
          </div>
          <div className= 'rightcolumn'>
            General hub where tutors can store all of their homework, lesson plans and notes for the students.
          </div>
        </div>
     </div>
  )
}


export default TopSection
