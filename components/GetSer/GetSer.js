'use client';
import { sendForm } from "@emailjs/browser";
import { useState } from "react";

export default function GetSer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendForm('service_ukc9sve', 'template_7w6ij4w', e.target, 'aQ_b0gm5EDH5P9Mgk')
      .then((result) => {
        setStatus('Message sent successfully');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() =>{
          setStatus('');
        },3000 );
      }, (error) => {
        setStatus('Message sending failed');
        setTimeout(()=>{
          setStatus('')
        },3000);
      });
  };

  return (
    <div className="container">
      <div className="testimonial__form">
        <h2 className="title">Get a Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grp">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grp">
                <textarea name="message" placeholder="Message"    value={formData.message} onChange={handleChange} required />
            </div>
          <button type="submit" className="btn mt-4">Send Message</button>
          {status && <p className="status-message ">{status}</p>}
        </form>
      </div>
    </div>
  );
}
