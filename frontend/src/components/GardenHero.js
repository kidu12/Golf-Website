import React, { useState, useEffect } from 'react';
import garden1 from '../assets/images/Garden-5.webp';
import garden2 from '../assets/images/gurdon_6.webp';
import garden3 from '../assets/images/gurdon_5.webp';

const images = [garden1, garden2, garden3];

const GardenHero = ({ language }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="d-flex align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        position: 'relative',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="overlay position-absolute w-100 h-100 opacity-50"></div>
      <div className="container position-relative z-2">
       <h1 className="display-4 fw-bold text-white">
  {language === 'en' ? 'Garden Area & Grounds' : 'አረንጓዴ መሬት'}
</h1>
<p className="lead mt-2">
  {language === 'en'
    ? 'A vibrant, secure space for up to 6000-10000 guests and all your special events.'
    : 'ለ 6000-10000 እንግዶች እና ለሁሉም ልዩ ዝግጅቶች የተዘጋጀ እና ደህንነቱ የተጠበቀ ቦታ።'
  }
</p>

      </div>
    </section>
  );
};

export default GardenHero;
