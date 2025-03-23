import React, { useState } from 'react';
import './main.css';

const CreateRequestForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    urgency: 'medium',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <label>Title:</label>
      <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleChange} 
        required 
      />

      <label>Category:</label>
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="technical">Technical</option>
        <option value="emotional">Emotional Support</option>
      </select>

      <label>Description:</label>
      <textarea 
        name="description" 
        value={formData.description} 
        onChange={handleChange} 
        required 
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateRequestForm;
