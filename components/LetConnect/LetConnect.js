'use client';
import { sendForm } from "@emailjs/browser";
import { useState } from "react";

export default function LetConnect(){
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
    return(
        <> 
        <div className="container">
             <div className="row">
                <div className="col-lg-6">
                    <div className="call-back-content">
                         <div className="section-title white-title mb-10">
                            <h2 className="title">Let's Connect</h2>
                         </div>
                            <p>Transform your business and get online with less hassle with our comprehensive development solutions.</p>
                      
                     </div>
                </div>
                <div className="col-lg-6">
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
                                    <div className="col-md-12">
                                        <button type="submit" className="btn">Send Now</button>
                                        {status && <p className="text-white p-4 text-center">{status}</p>}
                                     </div>
                            </div>
                        </form>
                     </div>
                </div>
             </div>
        </div>       
        </>
    );
}

