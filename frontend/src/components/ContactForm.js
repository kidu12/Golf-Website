import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../styles/contact.css';

const ContactForm =({ language }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError('');

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, data);
      setSubmitted(true);
      form.current.reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <div className="contact-form bg-light shadow-sm p-4 rounded">
       <h3 className="mb-4 fw-bold">
      {language === 'en' ? 'Get in touch!' : 'የግንኙነት እና መጠይቅ ፎርም'}
    </h3>
    <form ref={form} onSubmit={sendMessage}>
      <div className="mb-3">
        <input 
          type="text" 
          name="user_name" 
          className="form-control" 
          placeholder={language === 'en' ? 'Enter your name or company' : 'ስምዎን ወይም ኩባንያዎን ያስገቡ'} 
          required 
        />
      </div>
      <div className="mb-3">
        <input 
          type="email" 
          name="user_email" 
          className="form-control" 
          placeholder={language === 'en' ? 'Enter a valid email' : 'ትክክለኛ  ኢሜይል ያስገቡ'} 
          required 
        />
      </div>
      <div className="mb-3">
        <input 
          type="text" 
          name="phone_no" 
          className="form-control" 
          placeholder={language === 'en' ? 'Enter your phone number' : 'ስልክ ቁጥርዎን ያስገቡ'} 
          required 
        />
      </div>
      <div className="mb-3">
        <textarea 
          name="message" 
          rows="4" 
          className="form-control" 
          placeholder={language === 'en' ? 'Enter your message' : 'መልእክትዎን ያስገቡ'} 
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-danger w-100">
        {language === 'en' ? 'Submit' : 'ላክ'}
      </button>
    </form>
  </div>

  {submitted && (
    <div className="alert alert-success mt-4" role="alert">
      ✅ {language === 'en' 
        ? 'Thank you! Your message has been sent.' 
        : 'እናመሰግናለን! መልእክትዎ ተልኳል።'}
    </div>
  )}
    
      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          ❌ {error}
        </div>
      )}
    </>
  );
};

export default ContactForm;
