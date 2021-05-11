
import './App.css';
import Home from './Home';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";


firebase.initializeApp({
  apiKey: "AIzaSyDXBWJK1tw0Pcwy7Iq0BIiF2xJD0WqER6o",
  authDomain: "automation-aaf59.firebaseapp.com",
  projectId: "automation-aaf59",
  storageBucket: "automation-aaf59.appspot.com",
  messagingSenderId: "199449627748",
  appId: "1:199449627748:web:9e5ced4bf41694fc432371"
});

const auth = firebase.auth();



function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header><h1 className="h1signout"><SignOut/></h1></header>
      {user ? <Home /> : <SignIn />}
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="signout" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
export default App;
