import React, { useState } from 'react';
import "./RegForm.css"
const ad={
    marginLeft:"50px",
    //backgroundColor:'red',
}
// Mock API call
const mockApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Registration successful!");
    }, 2000);
  });
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.password) tempErrors.password = 'Password is required';
    else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await mockApiCall();
      setSuccessMessage(response);
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      setErrors({ apiError: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      {/* {successMessage && <div className="success-message">{successMessage}</div>} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={ad}>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div>
          <label style={{marginLeft:"50px"}}>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{marginLeft:"30px"}}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label style={ad}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{marginBottom:"50px"}}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
        {errors.apiError && <div className="error">{errors.apiError}</div>}
      </form>
      <h1 style={{marginTop:"50px"}}>{successMessage && <div className="success-message">{successMessage}</div>}</h1>
    </div>
  );
};

export default RegistrationForm;
