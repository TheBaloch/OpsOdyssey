'use client';
import { sendForm } from "@emailjs/browser";
import { useState } from "react";
export default function Callback2() {
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
            setTimeout(() =>{
                setStatus('');
              },3000 );
          });
      };
      const closeMessage = () => {
        setStatus('');
      };
    return (
        <>
            <section className="call-back-area call-back-area-two">
                <div className="container">
                    <div className="call-back-wrap">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <div className="call-back-content">
                                    <div className="section-title white-title mb-10 tg-heading-subheading animation-style3">
                                        <h2 className="title tg-element-title">Let's Connect</h2>
                                    </div>
                                    <p>Transform your business and get online with less hassle with our comprehensive development solutions.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="call-back-form">
                                <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-grp">
                                       <input 
                                       type="text" 
                                        name="name"
                                       placeholder="Name "
                                       value={formData.name}
                                        onChange={handleChange} 
                                        required />
                                    </div>
                                </div>
                                   <div className="col-md-6">
                                         <div className="form-grp">
                                         <input 
                                         type="email"
                                         name="email" 
                                         placeholder="E-mail " 
                                         value={formData.email}
                                         onChange={handleChange}
                                         required />
                                         </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-grp">
                                        <textarea name="message" placeholder="Message"    value={formData.message} onChange={handleChange} required />
                                    </div>
                                    </div>
                                   {/* <div className="col-md-6">
                                         <div className="form-grp">
                                            <input 
                                            type="number" 
                                            placeholder="Phone "
                                             name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required />
                                         </div>
                                    </div> */}
                                   
                                    <div className="col-md-12">
                                        <button type="submit" className="btn">Send Now</button>
                                        {status && (<div className="success-msg mt-4 "> 
                                         <img className="success-icon " src="assets/img/icon/checked.png" />
                                         <p className="text-white">{status}</p>
                                        <button onClick={closeMessage} className="close-btn"><i className="far fa-window-close"  /></button> </div>)}
                                    </div>
                            </div>
                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
