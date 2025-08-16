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

  const footerText = {
    coreServices: { en: 'Core Services', am: 'ዋና አገልግሎቶች' },
    additionalServices: { en: 'Additional Services', am: 'ተጨማሪ አገልግሎቶች' },
    contactUs: { en: 'Contact Us', am: 'ያግኙን' },
    usefulLinks: { en: 'Useful Links', am: 'ጠቃሚ ገፆች' },
    shareExperience: { en: 'Share Your Experience', am: 'ሃሳብዎን/አስተያየትዎን ያጋሩ' },
    yourName: { en: 'Your Name', am: 'ሙሉ ስምዎን ይፃፉልን' },
    sharePlaceholder: { en: 'Share your experience...', am: 'የእርስዎን ሃሳብ/አስተያየት/ ያጋሩ...' },
    submit: { en: 'Submit', am: 'ላክ' },
    copyright: { en: '© 2025 Addis Ababa Golf Club. All rights reserved.', am: '© 2025 አዲስ አበባ ጎልፍ ክለብ የባልቤትነት መብቱ የተጠበቀ ነው ።' },
    golfCourse: { en: 'Golf Course', am: 'የጎልፍ ስፓርት አገልግሎት' },
    barRestaurant: { en: 'Bar & Restaurant', am: 'የተሟላ የምግብ አቅርቦት' },
    fitnessGym: { en: 'Fitness & Gym', am: 'የጂምናዚየም አገልግሎት' },
    vipConference: { en: 'VIP Conference Room', am: 'የስብሰባ አዳራሽ አገልግሎት' },
    roomService: { en: 'Room Service', am: 'የተሟላ የመኝታ አገልግሎት' },
    gardenGrounds: { en: 'Garden & Grounds', am: 'አረንጓዴ ስፍራ(ለተላያዩ ኩነቶች ለማዘጋጀት)' },
    juiceBar: { en: 'Juice Bar', am: 'የጁስ ባር' },
    childrensPlayground: { en: 'Childrens Playground', am: 'የልጆች መጫወቻ ቦታ' },
    carWash: { en: 'Car Wash', am: 'የመኪና ማጠቢያ' },
    coffeeCeremony: { en: 'Coffee Ceremony', am: 'ለባህላዊ የቡና ሥነ-ስርዓት' },
    catering: { en: 'Catering Service', am: 'የተሟላ የምግብ አቅርቦት አገልግሎት' },
    exhibitions: { en: 'Exhibitions & Bazaars', am: 'ለኤግዚቢሽኖች እና ባዛሮች' },
    others: { en: 'Others', am: 'ሌሎች' },
    address: { en: 'Tor Hailoch, Addis Ababa', am: 'አዲስ አበባ፣ ልደታ ፣ ጦር ሃይሎች ' },
    forGolf: { en: 'For Golf Course:', am: 'ለጎልፍ ኮርስ፡' },
    forHotel: { en: 'For Hotel,Bedroom & Other Service:', am: 'ለሆቴል፣ ለመኝታ ክፍል እና ለሌሎች አገልግሎቶች፡' },
    forEvents: { en: 'For Events:', am: 'ለዝግጅቶች፡' },
    forEventss: { en: 'For Events:', am: 'የሰራ ቀናት' },
    forMarketing: { en: 'For Marketing MGT:', am: 'ለገበያ አስተዳደር፡' },
    moreInfo: { en: 'For more info', am: 'ለበለጠ መረጃ' },

        moreInfo: { en: 'For more info', am: 'ለበለጠ መረጃ' },

    hours: { en: 'Monday – Sunday', am: 'ከሰኞ – እሁድ' },
    home: { en: 'Home', am: 'መነሻ ገጽ' },
    about: { en: 'About', am: 'ስለእኛ' },
    privacy: { en: 'Privacy & Policy', am: 'የግላዊነት ፖሊሲ' },
    news: { en: 'Event and News', am: 'መረጃ እና ዜና' },
  };

  return (
    <footer className="footer-custom pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Core Services */}
          <div className="col-lg-2 col-md-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">{footerText.coreServices[language]}</h5>
            <p><a href="/services/tennis-court" className="footer-link">{footerText.golfCourse[language]}</a></p>
            <p><a href="/services/bar-restaurant" className="footer-link">{footerText.barRestaurant[language]}</a></p>
            <p><a href="/services/gym-center" className="footer-link">{footerText.fitnessGym[language]}</a></p>
            <p><a href="/services/conference-hall" className="footer-link">{footerText.vipConference[language]}</a></p>
            <p><a href="/services/room-service" className="footer-link">{footerText.roomService[language]}</a></p>
            <p><a href="/services/garden-grounds" className="footer-link">{footerText.gardenGrounds[language]}</a></p>
          </div>

          {/* Additional Services */}
          <div className="col-lg-2 col-md-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">{footerText.additionalServices[language]}</h5>
            <p><a href="/services/juice-bar" className="footer-link">{footerText.juiceBar[language]}</a></p>
            <p><a href="/services/childrens-playground" className="footer-link">{footerText.childrensPlayground[language]}</a></p>
            <p><a href="/services/car-wash" className="footer-link">{footerText.carWash[language]}</a></p>
            <p><a href="/services/coffee-ceremony" className="footer-link">{footerText.coffeeCeremony[language]}</a></p>
            <p><a href="/services/catering" className="footer-link">{footerText.catering[language]}</a></p>
            <p><a href="/services/exhibitions-bazaars" className="footer-link">{footerText.exhibitions[language]}</a></p>
            <p><a href="/services/other-services" className="footer-link">{footerText.others[language]}</a></p>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-6 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">{footerText.contactUs[language]}</h5>
            <div className="contact-info">
              <p className="address">{footerText.address[language]}</p>
              <div className="phone-group">
                <p>{footerText.forGolf[language]} <a href="tel:+251913685564" className="phone-number">+251 913 685564</a></p>
                <p>{footerText.forHotel[language]} <a href="tel:+251113201893" className="phone-number">+251 113 201893</a></p>
                <p>{footerText.forEvents[language]} <a href="tel:+251911612059" className="phone-number">+251 911 612059</a></p>
                <p>{footerText.forMarketing[language]} <a href="tel:+251932143333" className="phone-number">+251 932 143333</a></p>
              </div>
              <div className="working-hours mt-3">
                <p><strong>{footerText.forEventss[language]}:</strong> {footerText.hours[language]}</p>
              </div>
              <p><a href="/contact" className="footer-link more-info-link">{footerText.moreInfo[language]}</a></p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6 mx-auto mt-3">
            <h5 className="text-uppercase mb-4">{footerText.usefulLinks[language]}</h5>
            <p><a href="/" className="footer-link">{footerText.home[language]}</a></p>
            <p><a href="/about" className="footer-link">{footerText.about[language]}</a></p>
            <p><a href="/contact" className="footer-link">{footerText.contactUs[language]}</a></p>
            <p><a href="/privacy-policy" className="footer-link">{footerText.privacy[language]}</a></p>
            <p><a href="/news-events" className="footer-link">{footerText.news[language]}</a></p>
          </div>

          {/* Share Your Experience */}
          <div className="col-lg-3 col-md-6 mx-auto mt-3">
            <h5 className="text-uppercase mb-3">{footerText.shareExperience[language]}</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                  placeholder={footerText.yourName[language]}
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
                  placeholder={footerText.sharePlaceholder[language]}
                  required
                  value={testimonial.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-footer-submit btn-sm">
                {footerText.submit[language]}
              </button>
            </form>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <div className="d-flex justify-content-center gap-4 footer-social-icon">
              <a href="#" className="text-white fs-4"><FaFacebook /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row text-center">
          <div className="col">
            <p className="mb-0">{footerText.copyright[language]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
