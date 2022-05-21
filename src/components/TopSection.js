import React from 'react'
import './TopSection.css';
import logo from '../Images/tutor.png'
import { Link } from 'react-router-dom'
import { Button} from './Button.js'


function TopSection() {
  return (
    <div className='top-container'>
        <img src={logo} alt="This is the background" />
        <h1> LEARNING TOGETHER </h1>
        <div className='btn-mobile'>
          <Button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Join Now
          </Button>  

        </div>
    </div>
  )
}


export default TopSection
