import React from 'react';
import logo from '../assets/images/logo.png'; // adjust path as needed
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Logo + Description */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <img src={logo} alt="Club Logo" height="50" className="mb-3 rounded-circle" />
            <p>
              Ethiopian Defense Force Officers Club offers a wide range of premium services,
              from wellness and fitness to world-class event hosting.
            </p>
          </div>

          {/* Our Services */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Our Services</h5>
            <p><a href="#spa" className="text-white text-decoration-none">Spa & Massage</a></p>
            <p><a href="#gym" className="text-white text-decoration-none">Gymnasium</a></p>
            <p><a href="#tennis" className="text-white text-decoration-none">Ground Tennis</a></p>
            <p><a href="#hall" className="text-white text-decoration-none">Event Hall</a></p>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Useful Links</h5>
            <p><a href="#" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#about" className="text-white text-decoration-none">About</a></p>
            <p><a href="#services" className="text-white text-decoration-none">Services</a></p>
            <p><a href="#contact" className="text-white text-decoration-none">Contact Us</a></p>
          </div>

          {/* Follow Us */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><FaFacebook /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-4" />
        <div className="row text-center">
          <div className="col">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Ethiopian Defense Force Officers Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
