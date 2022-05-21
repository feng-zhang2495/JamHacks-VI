import React from 'react' 
import { useState } from 'react'

function Dashboard() {
    
    const [message, setMessage] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
    }

    return (
    <div>
        <form className= "form" onSubmit={HandleSubmit}>
                <h1> Text Message </h1>
                <div className = "form-inputs">
                  <label htmlFor = "message"
                  className="form-label">
                    Message 
                  </label>
                    <input
                      id = 'message' 
                      type = 'message'
                      name='message'
                      className='form-input'
                      placeholder="Text appears here"
                      onChange={(e) => {setMessage(e.target.value)}}
                    />
                </div>
             </form>
    </div>
    )
}

export default Dashboard