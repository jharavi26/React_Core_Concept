import React, { useState } from 'react';

function FormHandling() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle changes in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Update corresponding field
    });
  };

  // Handle form submission with validation
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!formData.username) {
      alert('Username is required');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    // If all validation passes
    console.log('Form data submitted:', formData);
    // You can now send the formData to your backend or perform other actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandling;
