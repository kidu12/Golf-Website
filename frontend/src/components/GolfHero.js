import React, { useState, useEffect } from 'react';
import tennis1 from '../assets/images/bg1.webp';
import tennis4 from '../assets/images/golf_store.webp';
import tennis2 from '../assets/images/gardon.webp';
import tennis3 from '../assets/images/green.webp';

const images = [tennis1, tennis2, tennis3, tennis4];

const GolfHero = ({ language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        height: '60vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

    </div>
  );
};

export default GolfHero;
