import React, { useState } from 'react';
import "../Style/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.message === 'Form submitted successfully') {
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('There was an error submitting your form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form.');
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="phone">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Your Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;