import './App.css';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import Mainpage from './components/Mainpage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, Navigate, useRef } from 'react'
import { userInformation } from './authentication/Authentication'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from './components/dashboard';

const firebaseConfig = {
  apiKey: "AIzaSyB6Vc4u0g4AYYrzEDo8UYrNssd1vxIVHdc",
  authDomain: "tutoring-app-8caac.firebaseapp.com",
  projectId: "tutoring-app-8caac",
  storageBucket: "tutoring-app-8caac.appspot.com",
  messagingSenderId: "430567269506",
  appId: "1:430567269506:web:41487159a1908e1585009b",
  measurementId: "G-0Y54M15CXM"
};

//Init app
initializeApp(firebaseConfig);

const auth = getAuth();



// function ChatRoom() {
//   const messagesRef = collection('messages');
//   const query = messagesRef.orderby('createdAt').limit(25);

//   const [messages] = useCollectionData(query, {idField: 'id'});

//   return (
//     <div>
//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/> )}
//     </div>
//   )
// }

// function ChatMessage(props) {
//   const { text, uid } = props.message;

//   return <p>{text}</p>
// }


function App() {
  //signed in user is an object, signed out, user is null
    const [user] = useAuthState(auth);
    // console.log(user)

  return (
      <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Mainpage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
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