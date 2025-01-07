import React, { useState } from 'react';
import './Pages.css'

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isSignup: false, // Toggle between login and signup
  });
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, isSignup } = formData;

    // Validation
    if (!email || !password) {
      setMessage('Please fill in all required fields.');
      setShowPopup(true);
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setShowPopup(true);
      return;
    }

    setMessage(isSignup ? 'Account Created Successfully!' : 'Successfully Logged In!');
    setShowPopup(true);

    // Reset form
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      isSignup,
    });
  };

  const toggleFormType = () => {
    setFormData({ ...formData, isSignup: !formData.isSignup });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="form-container">
      <h2>{formData.isSignup ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {formData.isSignup && (
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <button type="submit" className="btn">
          {formData.isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      <p className="toggle-text" onClick={toggleFormType}>
        {formData.isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
      </p>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{message}</p>
            <button onClick={closePopup} className="btn close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
