import { useState, Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";
import app from "./firebase";
import Home from "./Home";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Messages from "./Messages";
import Login from "./Login";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const handleGoogleClick =  () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const auth = getAuth(app);
    /*await signInWithRedirect(auth, provider);
    const result = await getRedirectResult(auth)
    if(result){
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(auth, result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user.providerData[0]);
        console.log("user", user);
        console.log("current ", currentUser);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/dashboard");
      }*/
     
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user.providerData[0]);
        console.log("user", user);
        console.log("current ", currentUser);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/dashboard");
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
    <Fragment>
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md mb-[3px]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo or App Name */}
          <Link to="/" className="text-2xl font-bold text-pink-500">
            RentaDate
          </Link>

          {/* Navigation Links */}
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-pink-500">
              Home
            </Link>
            <Link to="/messages" className="text-gray-600 hover:text-pink-500">
              Inbox
            </Link>
            {/* Add more navigation links as needed */}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/register"
          element={
            <Register
              handleGoogleClick={handleGoogleClick}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard currentUser={currentUser} />}
        />
        <Route path="/messages" element={<Messages />} />
        <Route
          path="/login"
          element={<Login handleGoogleClick={handleGoogleClick} />}
        />
      </Routes>
    </Fragment>
  );
};

export default App;
