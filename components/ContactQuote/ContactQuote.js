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
         setTimeout(() =>{
            setStatus('');
          },3000 );
       }, (error) =>{
        setStatus('Message sending failed');
        setTimeout(()=>{
            setStatus('')
          },3000);
       });
    };
    const closeMessage = () => {
        setStatus('');
      };
    return(
        <div className="contact__form-wrap">
        <h2 className="title pb-2">Give Us a Message</h2>
       
        <form  onSubmit={handleSubmit}>
            <div className="form-grp">
                <textarea name="message" placeholder="Message"    value={formData.message} onChange={handleChange} required />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-grp">
                        <input type="text" name="name" placeholder="Name"  value={formData.name} onChange={handleChange}  required  />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-grp">
                        <input type="email" name="email" placeholder="Email"    value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-grp">
                        <input type="number" name="phone" placeholder="Phone"  value={formData.phone} onChange={handleChange} required />
                    </div>
                </div>
            </div>
           
            <button type="submit" className="btn">Submit post</button>
            {status && (<div className="success-msg mt-4 "> 
                     <img className="success-icon " src="assets/img/icon/checked.png" />
                     <p className="text-white">{status}</p>
                    <button onClick={closeMessage} className="close-btn"><i className="far fa-window-close"  /></button> </div>)}
            
        </form>
       
    </div>
    );
}