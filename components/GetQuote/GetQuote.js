'use client';
import { sendForm } from "@emailjs/browser";
import { useState } from "react";

export default function GetQuote() {
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
  const closeMessage = () => {
    setStatus('');
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
          <div className="form-grp select-grp">
            <select
              name="message"
              className="orderby"
              value={formData.message}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Discussing a future Project">Discussing a future Project</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Search Engine Optimization">Search Engine Optimization</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option> 
              <option value="Website Development">Website Development</option>
              <option value="Website Development">Web Scraping</option>
              <option value="Website Development">DevOps</option>
              <option value="Website Development">Telephony Solutions</option>
              <option value="Something else">Something else</option>
            </select>
          </div>
          <button type="submit" className="btn mt-4">Request a Quote</button>
          {status && (<div className="success-msg mt-4 "> 
            <img className="success-icon " src="assets/img/icon/checked.png" />
            <p className="text-white">{status}</p>
           <button onClick={closeMessage} className="close-btn"><i className="far fa-window-close"  /></button> </div>)}
        </form>
      </div>
    </div>
  );
}
