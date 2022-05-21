import {initializeApp} from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { useState, useEffect } from 'react';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

//init authetication
const auth = getAuth();

//CREATES AN ACCOUNT FOR THE USER
const CreateUserAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

//SIGN USER OUT
const LogOut = () => {
    return signOut(auth);
}

//SIGN USER BACK IN
const SignUserIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }


export function userInformation() {
    const user = auth.currentUser;
    if (user !== null) {
        return true
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
}
}



export { CreateUserAccount, SignUserIn, LogOut }