import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);  // For success or error message
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Disable the button while submitting
    setIsSubmitting(true);

    // Simulate form submission (e.g., API call)
    setTimeout(() => {
      // Assuming submission is successful
      setFormStatus('Message sent successfully!');
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        subject: '',
        message: ''
      });
    }, 2000); // Simulate 2 seconds delay for submission

    // If there was an error during submission, you can set:
    // setFormStatus('Error submitting message. Please try again.');
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            placeholder="Mobile Number"
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Email Subject"
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
        />
        <input 
          type="submit" 
          value={isSubmitting ? "Sending..." : "Send Message"} 
          className="btn" 
          disabled={isSubmitting} 
        />
      </form>
      
      {formStatus && (
        <p className={`status-message ${formStatus.includes('success') ? 'success' : 'error'}`}>
          {formStatus}
        </p>
      )}
    </section>
  );
}

export default Contact;
