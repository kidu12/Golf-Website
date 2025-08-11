import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import '../styles/header.css';
import { FaGlobe } from 'react-icons/fa';

const Header = ({ language, onLanguageChange }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const navText = {
    home: { en: 'Home', am: 'መነሻ ገጽ' },
    about: { en: 'About', am: 'ስለእኛ' },
    services: { en: 'Services', am: 'አገልግሎቶች' },
    membership: { en: 'Membership', am: 'አባልነት' },
    news: { en: 'Event and News', am: 'መረጃ እና ዜና' },
    contact: { en: 'Contact Us', am: 'ያግኙን' },
    brand: { en: 'Golf Club', am: 'ጎልፍ ክለብ' },
  };

  const serviceLinks = [
    { path: '/tennis', text: { en: 'Golf Course', am: 'የጎልፍ ስፖርት'} },
    { path: '/bar', text: { en: 'Bar & Restaurant', am: 'ባር እና ሬስቶራንት'} },
    { path: '/garden', text: { en: 'Garden & Grounds', am: 'አረንጓዴ ስፍራ'} },
    { path: '/spa', text: { en: 'Room Service', am: 'ክፍል አገልግሎት'} },
    { path: '/gym', text: { en: 'Fitness & Gym', am: 'ፊትነስ እና ጂም'} },
    { path: '/conference', text: { en: 'VIP Conference Room', am: 'የመሰብሰቢያ አዳራሽ'} },
    { path: '/juice-bar', text: { en: 'Juice Bar', am: 'የፍራፍሬ ጭማቂ ባር'} },
    { path: '/childrens-playground', text: { en: 'Childrens Playground', am: 'የልጆች መጫወቻ'} },
    { path: '/car-wash', text: { en: 'Car Wash', am: 'የመኪና ማጠቢያ'} },
    { path: '/coffee-ceremony', text: { en: 'Coffee Ceremony', am: 'የቡና ሥነ-ስርዓት'} },
    { path: '/catering-service', text: { en: 'Catering Service', am: 'የምግብ አቅርቦት አገልግሎት'} },
    { path: '/services/exhibitions-and-bazaars', text: { en: 'Exhibitions & Bazaars', am: 'ኤግዚቢሽኖች እና ባዛሮች'} },
    { path: '/other-services', text: { en: 'Others', am: 'ሌሎች' } },
  ];

    return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <div className="d-lg-none w-100 d-flex align-items-center justify-content-between mobile-header-row">
          <NavLink className="navbar-brand mobile-logo-left" to="/">
            <img src={logo} alt="Addis Ababa Golf Club Logo" style={{ width: '60px', height: '50px', objectFit: 'cover' }} loading="lazy" className="rounded-circle mobile-logo" />
          </NavLink>
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={onLanguageChange}
              className="btn btn-outline-light d-flex align-items-center gap-2 lang-switcher-btn mobile-lang-btn"
              style={{fontSize: '1rem'}}
            >
              <FaGlobe /> {language === 'en' ? 'አማ' : 'EN'}
            </button>
            <button
              className={`navbar-toggler hamburger-anim ${!isNavCollapsed ? 'open' : ''}`}
              type="button"
              onClick={handleNavCollapse}
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <div className="header-main-container d-none d-lg-flex">
            <div className="header-nav-left">
              <NavLink to="/" className="nav-link custom-nav-link" end>{navText.home[language]}</NavLink>
              <NavLink to="/about" className="nav-link custom-nav-link" end>{navText.about[language]}</NavLink>
              <NavLink to="/news-events" className="nav-link custom-nav-link" end>{navText.news[language]}</NavLink>
            </div>

            <div className="header-logo-center">
              <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Addis Ababa Golf Club Logo" style={{ width: '60px', height: '60px', objectFit: 'cover' }} loading="lazy" 
 className="rounded-circle" />
 </NavLink>
 
              
            </div>

            <div className="header-nav-right">
            <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle custom-nav-link" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {navText.services[language]}
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  {serviceLinks.map((link, index) => (
                    <li key={`service-${index}`}><NavLink className="dropdown-item" to={link.path}>{link.text[language]}</NavLink></li>
                  ))}
                </ul>
              </div>
              <NavLink to="/membership" className="nav-link custom-nav-link" end>{navText.membership[language]}</NavLink>
              <NavLink to="/contact" className="nav-link custom-nav-link" end>{navText.contact[language]}</NavLink>
              <button onClick={onLanguageChange} className="btn btn-outline-light d-flex align-items-center gap-2 lang-switcher-btn">
                <FaGlobe /> {language === 'en' ? 'አማ' : 'EN'}
              </button>
            </div>
          </div>

          <div className="d-lg-none">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink to="/" className="nav-link custom-nav-link" onClick={handleNavCollapse} end>{navText.home[language]}</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link custom-nav-link" onClick={handleNavCollapse} end>{navText.about[language]}</NavLink></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle custom-nav-link" href="#" id="mobileServicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {navText.services[language]}
                </a>
                <ul className="dropdown-menu" aria-labelledby="mobileServicesDropdown">
                  {serviceLinks.map((link, index) => (
                    <li key={`m-service-${index}`}><NavLink className="dropdown-item" to={link.path} onClick={handleNavCollapse}>{link.text[language]}</NavLink></li>
                  ))}
                </ul>
              </li>
              <li className="nav-item"><NavLink to="/membership" className="nav-link custom-nav-link" onClick={handleNavCollapse} end>{navText.membership[language]}</NavLink></li>
              <li className="nav-item"><NavLink to="/news-events" className="nav-link custom-nav-link" onClick={handleNavCollapse} end>{navText.news[language]}</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link custom-nav-link" onClick={handleNavCollapse} end>{navText.contact[language]}</NavLink></li>
              <li className="nav-item mt-2">
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
