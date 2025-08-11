import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import logo from '../assets/images/logo.webp';


const images = [
  '/images/bg1.webp',
  '/images/bg2.webp',
  '/images/bg3.webp',
];

const Hero = ({ language }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero d-flex align-items-center justify-content-center text-white text-center"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1 className="fw-bold text-white">
          {language === 'en'
            ? 'Welcome To The Ethiopian Defense Force Officers Club!'
            : 'እንኳን ወደ ኢትዮጵያ መከላከያ ሰራዊት መኮንኖች ክበብ በደህና መጡ'}
        </h1>
                <img src={logo} alt="Club Logo" height="120"   loading="lazy" 
 className="rounded-circle" />

            <p className="lead mt-2">
          {language === 'en'
            ? 'Experience a warm welcome—our team is here to make you feel right at home!'
            : 'ይምጡ ይጎብኙን በጥሩ መስተንግዷችንና አገልግሎታችን  ይደሰታሉ!'}
        </p>

      </div>
    </section>
  );
};

export default Hero;
