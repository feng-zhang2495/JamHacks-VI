import './App.css';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import Mainpage from './components/Mainpage'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, Navigate, useRef } from 'react'
import { userInformation } from './authentication/Authentication'

import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC6A4BHtwe60i7MdQSpQmy2pDzavJw9Eok",
  authDomain: "tutoring-website-d4601.firebaseapp.com",
  projectId: "tutoring-website-d4601",
  storageBucket: "tutoring-website-d4601.appspot.com",
  messagingSenderId: "488845068083",
  appId: "1:488845068083:web:80b332b8399c340eb3a046",
  measurementId: "G-VZ18G90N5Q"
};

//Init app
initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore()



function App() {
  //signed in user is an object, signed out, user is null
    const [user] = useAuthState(auth);
    console.log(user)

  return (
      <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={user ? <Mainpage /> : <Mainpage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        

        <Route path="*" element={<NotFound />} />
          
      </Routes>
      
    </div>
    
  );
}

// LOGOUT
// const [ loading, setLoading ] = useState(false);
//   const currentUser = useAuth();

//   const emailRef = useRef();
//   const passwordRef = useRef();

  

//   async function handleLogout() {
//     setLoading(true);
//     try {
//       await SignUserIn();
//     } catch {
//       alert("Error!");
//     }
//     setLoading(false);
//   }

export default App;