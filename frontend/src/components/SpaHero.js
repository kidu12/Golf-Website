import React, { useEffect, useState } from 'react';
import spa1 from '../assets/images/Spa-5.webp';
import spa2 from '../assets/images/Spa-1.webp';
import spa3 from '../assets/images/Spa-2.webp';

const spaImages = [spa1, spa2, spa3];

const SpaHero = ({ language }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % spaImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="d-flex align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${spaImages[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        position: 'relative',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="overlay position-absolute w-100 h-100  opacity-50"></div>
      <div className="container position-relative z-2">
       <h1 className="display-4 fw-bold text-white">
  {language === 'am' ? 'ስፓ እና ስቲም ማዕከል' : 'Spa & Steam Center'}
</h1>

<p className="lead mt-2">
  {language === 'am' 
    ? 'በዘመናዊ የስፓ ተቋማችን ያርፉ፣ እንደገና ያጸኑ እና ኃይል ይሙሉ።' 
    : 'Relax, rejuvenate, and recharge in our modern spa facilities.'}
</p>

      </div>
    </section>
  );
};

export default SpaHero;
