import './App.css';
import {initializeApp} from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { getDomainLocale } from 'next/dist/next-server/lib/router/router';


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

//FUNCTION THAT CREATES AN ACCOUNT
const CreateUserAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)

    .then((cred) => {
      console.log("user created", cred.user)
    })

    .catch((error) => {
      console.log('There was an error creating your account, the email address may already be in use')
      console.log(error)
    })
}

//SIGN USER OUT
const LogOut = () => {
  signOut(auth)
    .then(() => {
      console.log('user has logged out');
    })
    .catch((error) => {
      console.log(error);
    })
}

// createUserAccount('poxape6314@dufeed.com', 'as;ldjf;lajf;ljf');
LogOut()


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
