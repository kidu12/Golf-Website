import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import logo from '../assets/images/logo.webp';

const images = [
  '/images/bg4.webp',
  '/images/gate.webp',
  '/images/front_5.webp',
  '/images/main_hall.webp',
  '/images/front_3.webp',
  '/images/bg_06.webp',
  '/images/open_gate.webp',
  '/images/golf_store.webp', 
  '/images/bg2.webp',
];

const Hero = ({ language }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Preload images
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero d-flex align-items-end justify-content-center text-white text-center">
      {/* Slideshow images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Hero background"
          className={`hero-image ${index === current ? 'active' : ''}`}
        />
      ))}

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      {current === 0 && (
        <div className="content">
          <h2 className="fw-bold text-white">
            {language === 'en'
              ? 'Welcome to the Defense Force Foundation A.A Golf Club!'
              : 'እንኳን ወደ መከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ በደህና መጡ'}
          </h2>
          <p className="mt-2">
            {language === 'en'
              ? 'Experience a warm welcome—our team is here to make you feel right at home!'
              : 'ይምጡ ይጎብኙን አዲስ አበባ ጎልፍ ክለብ ጊዜዎን የማይረሳ ለማድረግ ዝግጁ ነው!'}
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
