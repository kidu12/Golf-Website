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
      await axios.post(`${process.env.REACT_APP_API_URL}/api/testimonials`, {
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
      

          {/* Core Services */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">
              {language === 'am' ? 'ዋና ዋና አገልግሎቶች' : 'Core Services'}
            </h5>
            <p><a href="/tennis" className="footer-link">{language === 'am' ? 'የጎልፍ ስፖርት' : 'Golf Course'}</a></p>
            <p><a href="/bar" className="footer-link">{language === 'am' ? 'ባር እና ሬስቶራንት' : 'Bar & Restaurant'}</a></p>
            <p><a href="/gym" className="footer-link">{language === 'am' ? 'ፊትነስ እና ጂም' : 'Fitness & Gym'}</a></p>
            <p><a href="/conference" className="footer-link">{language === 'am' ? 'አዳራሽ አገልግሎት' : 'VIP Conference Room'}</a></p>
            <p><a href="/spa" className="footer-link">{language === 'am' ? 'ክፍል አገልግሎት' : 'Room Service'}</a></p>
            <p><a href="/garden" className="footer-link">{language === 'am' ? 'አረንጓዴ ስፍራ' : 'Garden & Grounds'}</a></p>
          </div>

          {/* Additional Services */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">
              {language === 'am' ? 'ተጨማሪ አገልግሎቶች' : 'Additional Services'}
            </h5>
            <p><a href="/juice-bar" className="footer-link">{language === 'am' ? 'የፍራፍሬ ጭማቂ ባር' : 'Juice Bar'}</a></p>
            <p><a href="/childrens-playground" className="footer-link">{language === 'am' ? 'የልጆች መጫወቻ' : 'Childrens Playground'}</a></p>
            <p><a href="/car-wash" className="footer-link">{language === 'am' ? 'የመኪና ማጠቢያ' : 'Car Wash'}</a></p>
            <p><a href="/coffee-ceremony" className="footer-link">{language === 'am' ? 'የቡና ሥነ-ስርዓት' : 'Coffee Ceremony'}</a></p>
            <p><a href="/catering-service" className="footer-link">{language === 'am' ? 'የምግብ አቅርቦት አገልግሎት' : 'Catering Service'}</a></p>
            <p><a href="/services/exhibitions-and-bazaars" className="footer-link">{language === 'am' ? 'ኤግዚቢሽኖች እና ባዛሮች' : 'Exhibitions & Bazaars'}</a></p>
            <p><a href="/other-services" className="footer-link">{language === 'am' ? 'ሌሎች' : 'Others'}</a></p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">
              {language === 'am' ? 'ያግኙን' : 'Contact Us'}
            </h5>
            <p className="mb-1">{language === 'am' ? 'ጦር ሃይሎች, አዲስ አበባ' : 'Tor Hailoch, Addis Ababa'}</p>
             <p className="contact-item">
              <span>{language === 'am' ? 'ጎልፍ:' : 'For Golf Course:'}</span>
              <a href="tel:+251913685564" className="footer-link">+251 913 685564</a>
            </p>
             <p className="contact-item">
              <span>{language === 'am' ? 'ሆቴል:' : 'For Hotel,Bedroom & Other Service:'}</span>
              <a href="tel:+251113201893" className="footer-link">+251 113 201893</a>
            </p>
            <p className="contact-item">
              <span>{language === 'am' ? 'ዝግጅቶች:' : 'For Events:'}</span>
              <a href="tel:+251911612059" className="footer-link">+251 911 612059</a>
            </p>
            <p className="contact-item">
              <span>{language === 'am' ? 'ማርኬቲንግ:' : 'For Marketing MGT:'}</span>
              <a href="tel:+251932143333" className="footer-link">+251 932 143333</a>
            </p>
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
              <a href="#" className="text-white fs-4"><FaFacebook /></a>
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
                ? 'የአዲስ አበባ ጎልፍ ክለብ መብቱ በህግ የተጠበቀ ነው።'
                : 'Addis Ababa Golf Club. All rights reserved.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
