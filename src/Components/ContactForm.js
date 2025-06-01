import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5118/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setResponse('Bericht succesvol verzonden!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponse('Er is iets misgegaan.');
      }
    } catch {
      setResponse('Er is een fout opgetreden bij het verzenden.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-overlay" />
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact me</h2>
        <div className="inputs">
          <input type="text"   name="name"    placeholder="Name"   value={formData.name}    onChange={handleChange} required />
          <input type="email"  name="email"   placeholder="E-mail"  value={formData.email}   onChange={handleChange} required />
          <textarea           name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        </div>
        <button class="contact-btn">
  <span class="icon">➜</span>
  Contact me
</button>

        {response && <p className="response">{response}</p>}
      </form>
    </section>
  );
}

export default ContactForm;

