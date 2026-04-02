import { useState } from "react";
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name:"", email:"", message:"" });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
    setFormData({ name:"", email:"", message:"" });
  }

  return (
    <div className="contact" id="contact">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required/>
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required/>
        <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Message" required/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact;