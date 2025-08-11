import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = ({ language = 'en' }) => {
  const [testimonial, setTestimonial] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('${process.env.REACT_APP_API_URL}/api/testimonials', {
        name: testimonial.name,
        message: testimonial.message,
      });

      alert(
        language === 'am'
          ? '✅ አናመሰግናለን! አስተያየትዎ ተልኳል።'
          : '✅ Thank you! Your testimonial has been sent for review.'
      );
      setTestimonial({ name: '', message: '' });
    } catch (err) {
      alert(language === 'am' ? 'ልከቱ አልተሳካም።' : 'Submission failed. Please try again.');
    }
  };

  return (
    <footer className="footer-custom pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
      

          {/* Our Services */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">
              {language === 'am' ? 'የምንሰጣቸው የአገልግሎቶች አይነቶች' : 'Our Services'}
            </h5>
            <p><a href="/spa" className="footer-link">{language === 'am' ? 'የስፓ እና ማሳጅ አገልግሎት' : 'Spa & Massage'}</a></p>
            <p><a href="/gym" className="footer-link">{language === 'am' ? 'ጂምናዚየም' : 'Gymnasium'}</a></p>
            <p><a href="/tennis" className="footer-link">{language === 'am' ? 'የሜዳ ቴኒስ' : 'Ground Tennis'}</a></p>
            <p><a href="/conference" className="footer-link">{language === 'am' ? 'የዝግጅት አዳራሽ' : 'Event Hall'}</a></p>
            <p><a href="/bar" className="footer-link">{language === 'en' ? 'Restaurant & Kitchen' : 'ባር እና ሬስቶራንት'}</a></p>
            <p><a href="/garden" className="footer-link">{language === 'en' ? 'Garden & Grounds' : 'አረንጓዴ አካባቢ'}</a></p>
            <p><a href="/other-services" className="footer-link">{language === 'en' ? 'Others' : 'ሌሎች'}</a></p>

          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">
              {language === 'am' ? 'ያግኙን' : 'Contact Us'}
            </h5>
            <p className="mb-1">{language === 'am' ? 'ጦር ሃይሎቸ, አዲስ አበባ' : 'Torhailoch, Addis Ababa'}</p>
            <p className="mb-1"><a href="tel:+251926555599" className="footer-link">+251 92 655 5599</a></p>
            <p className="mb-1"><a href="tel:+251113717317" className="footer-link">+251 11 371 7317</a></p>
            <p className="mb-3"><a href="tel:+251113717318" className="footer-link">+251 11 371 7318</a></p>
            <p><a href="/contact" className="footer-link">{language === 'am' ? 'ለበለጠ መረጃ' : 'For more info'}</a></p>
            <h6 className="fw-bold">{language === 'am' ? 'የስራ ሰዓት' : 'Opening Hours'}</h6>
            <p>{language === 'am' ? 'ሰኞ – እሁድ' : 'Monday – Sunday'}</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 ">
              {language === 'am' ? 'ጠቃሚ ' : 'Useful Links'}
            </h5>
            <p><a href="/" className="footer-link">{language === 'am' ? 'መነሻ ገጽ' : 'Home'}</a></p>
            <p><a href="/about" className="footer-link">{language === 'am' ? 'ስለእኛ' : 'About'}</a></p>
            <p><a href="/contact" className="footer-link">{language === 'am' ? 'ያግኙን' : 'Contact Us'}</a></p>
            <p><a href="/privacy-policy" className="footer-link">{language === 'am' ? 'የግላዊነት ፖሊሲ' : 'Privacy & Policy'}</a></p>
            <p> <a className="nav-link custom-nav-link" href="/news-events">{language === 'en' ? 'Event and News' : 'መረጃ እና ዜና'}
  </a></p>

          </div>

          {/* Testimonial Form */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-3 fw-bold">
              {language === 'am' ? 'እርስዎን ያጋሩ' : 'Share Your Experience'}
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                  placeholder={language === 'am' ? 'ስምዎ' : 'Your Name'}
                  required
                  value={testimonial.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <textarea
                  name="message"
                  className="form-control form-control-sm"
                  rows="2"
                  placeholder={language === 'am' ? 'ልምድዎን ያካፍሉ...' : 'Share your experience...'}
                  required
                  value={testimonial.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-footer-submit btn-sm">
                {language === 'am' ? 'ላክ' : 'Submit'}
              </button>
            </form>


          </div>
        </div>

        {/* Follow Us */}
        <div className="row mt-4">
          <div className="col text-center">
            <div className="d-flex justify-content-center gap-4 footer-social-icon">
              <a href="https://web.facebook.com/p/EFDR-Defence-Force-Officers-Club-100064034525695/?_rdc=1&_rdr#" className="text-white fs-4"><FaFacebook /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-4" />
        <div className="row text-center">
          <div className="col">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} {language === 'am'
                ? 'የኢትዮጵያ መከላከያ ኃይል ኦፊሰር ክበብ መብት የተጠበቀ ነው።'
                : 'Ethiopian Defense Force Officers Club. All rights reserved.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
