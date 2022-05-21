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