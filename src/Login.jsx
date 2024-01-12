import React from 'react';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from './firebase';

const Login = ({ setCurrentUser, handleGoogleClick }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Basic password strength indication (for demonstration purposes)
    const passwordLength = value.length;
    if (passwordLength === 0) {
      setPasswordStrength('');
    } else if (passwordLength < 6) {
      setPasswordStrength('Weak');
    } else if (passwordLength < 10) {
      setPasswordStrength('Moderate');
    } else {
      setPasswordStrength('Strong');
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can enhance this as needed)
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen flex items-center justify-center font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <form onSubmit={handleSubmit}>
          {/* Existing form fields... */}

          <button
            className="w-full bg-blue-600 mt-3 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-500"
            type="button"
            onClick={handleGoogleClick}
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
