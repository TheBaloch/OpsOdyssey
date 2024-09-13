'use client'
import { sendForm } from "@emailjs/browser";
import { useState } from "react";

export default function ContactQuote(){
    const [formData , setFormData] =useState({
    name :'' ,
    email:'' ,
    phone: '' ,
    message: ''
    });
    const [status,setStatus] = useState('');
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});

    };
    const handleSubmit =(e) => {
        e.preventDefault();
    
    sendForm('service_ukc9sve', 'template_7w6ij4w' , e.target , 'aQ_b0gm5EDH5P9Mgk' )
       .then((result) =>{
         setStatus('Message sent successfully');
         setFormData({name:'' ,email:'', phone :'',message:''});
       }, (error) =>{
        setStatus('Message sending failed');

       });
    };
    return(
        <div className="contact__form-wrap">
        <h2 className="title pb-2">Give Us a Message</h2>
       
        <form  onSubmit={handleSubmit}>
            <div className="form-grp">
                <textarea name="message" placeholder="Message"    value={formData.message} onChange={handleChange} />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-grp">
                        <input type="text" name="name" placeholder="Name"  value={formData.name} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-grp">
                        <input type="email" name="email" placeholder="Email"    value={formData.email} onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-grp">
                        <input type="number" name="phone" placeholder="Phone"  value={formData.phone} onChange={handleChange} />
                    </div>
                </div>
            </div>
           
            <button type="submit" className="btn">Submit post</button>
            {status && <p className="status-message">{status}</p>}
        </form>
       
    </div>
    );
}