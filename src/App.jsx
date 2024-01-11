import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase'
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';

const App = () => {
  const [ currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate();

  const handleGoogleClick = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const auth = getAuth(app);
    console.log(auth)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user.providerData[0]);
        console.log('user', user)
        console.log('current ', currentUser)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate('/dashboard')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
      });
  };

  return (
    
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/register" element={<Register handleGoogleClick={handleGoogleClick} currentUser={currentUser}/>} />
        <Route path="/dashboard" element={<Dashboard currentUser={currentUser}/>} />
      </Routes>
  );
};

export default App;