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
      <div className="overlay" style={{ zIndex: 1 }}></div>
      <div className="container text-center" style={{ zIndex: 2 }}>
      <h1 className="display-4 fw-bold text-white">
      {language === 'en' ? 'Golf Course' : 'የጎልፍ ሜዳ'}
</h1>
<p className="lead mt-2">
  {language === 'en' 
    ? 'Addis Ababa Golf Club A fulfilling experience for players of all skill levels..' 
    : 'አዲስ አበባ ጎልፍ ክለብለሁሉም የክህሎት ደረጃዎች ላሉ ተጫዋቾች አርኪ ተሞክሮ።'
  }
</p>
      </div>
    </div>
  );
};

export default GolfHero;
