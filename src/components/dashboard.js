import React from 'react' 
import { useState } from 'react'
import { addDoc } from 'firebase/firestore'
import {getFirestore, collection, getDocs, onSnapshot} from 'firebase/firestore'


function Dashboard() {
    const db = getFirestore()

    //collection ref
    const colRef = collection(db, 'messages')

    // const query = colRef.orderBy('createdAt').limit(100) 

    // real time collection data
    onSnapshot(colRef, (snapshot) => {
        var msgs = []
        snapshot.docs.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id })
        })
        console.log(msgs)
    })


    //output messages to screen function
    // const MesssageOutput = (msgs) => {
    //     for (let i = 0; i < msgs.length; i++) {
    //         const element = <h1>msgs[i]</h1>
    //         element.
    //     }
    // }

    
    

    const [messages, setMessage] = useState('')
    const [formValue, setFormValue] = useState('')
    //ADDS A MESSAGE TO THE DATABASE
    const HandleSubmit = (e) => {
        e.preventDefault()
        
    }

    // addDoc(colRef, {
    //     text: {messages}
    // })
    //     .then(() => {
    //         console.log('Message added to database')
    //     })
    //     .catch((e) => {
    //         console.log(e)
    //     })


    return (
    <div>
        <div id="MessageOut">
                
        </div>
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
                    <button>Send</button>
                </div>
             </form>
    </div>
    )
}



export default Dashboard