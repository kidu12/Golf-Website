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
    brand: { en: 'Defence Force Officers Club', am: 'የመከላከያ መኮንኖች ክበብ' },
  };

  const serviceLinks = [
    { path: '/conference', text: { en: 'Conference Hall', am: 'የመሰብሰቢያ አዳራሽ' } },
    { path: '/bar', text: { en: 'Restaurant & Kitchen', am: 'ባር እና ሬስቶራንት' } },
    { path: '/spa', text: { en: 'Spa & Steam Center', am: 'ስፓ እና ስቲም' } },
    { path: '/gym', text: { en: 'Fitness & Gym', am: 'ፊትነስ እና ጂም' } },
    { path: '/tennis', text: { en: 'Tennis Court', am: 'ሜዳ ቴኒስ' } },
    { path: '/garden', text: { en: 'Garden & Grounds', am: 'አረንጓዴ ስፍራ' } },
    { path: '/other-services', text: { en: 'Others', am: 'ሌሎች' } },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNav" aria-expanded={!isNavCollapsed}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavLink className="navbar-brand d-lg-none mx-auto" to="/">
        <img src={logo} alt="Club Logo" height="50"   loading="lazy" 
 className="rounded-circle" /> 
 </NavLink>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <div className="header-main-container d-none d-lg-flex">
            <div className="header-nav-left">
              <NavLink to="/" className="nav-link custom-nav-link" end>{navText.home[language]}</NavLink>
              <NavLink to="/about" className="nav-link custom-nav-link" end>{navText.about[language]}</NavLink>
              <NavLink to="/news-events" className="nav-link custom-nav-link" end>{navText.news[language]}</NavLink>
            </div>

            <div className="header-logo-center">
              <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Club Logo" height="60"   loading="lazy" 
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
                <button onClick={onLanguageChange} className="btn btn-outline-light d-flex align-items-center gap-2 lang-switcher-btn mx-auto">
                  <FaGlobe /> {language === 'en' ? 'አማ' : 'EN'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
