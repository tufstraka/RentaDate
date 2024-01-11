import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');

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
    // Additional validation logic and registration process can be added here
    alert('Registration Successful!');
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen flex items-center justify-center font-poppins">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Enter a valid email address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
            {passwordStrength && (
              <p className={`text-sm mt-2 text-${passwordStrength.toLowerCase()}`}>
                Password Strength: {passwordStrength}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          <button
            className="w-full bg-pink-500 text-white py-2 px-6 rounded-full font-bold hover:bg-pink-400"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
