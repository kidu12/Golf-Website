import React, { useState, useEffect } from 'react';
import bg1 from '../assets/images/resrorant_5.webp';
import bg2 from '../assets/images/Bar-1.webp';
import bg3 from '../assets/images/restorant_3.webp';

const images = [bg1, bg2, bg3];

const BarHero = ({ language }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 2000);
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
        transition: 'background-image 1s ease-in-out',
        position: 'relative'
      }}
    >
      <div className="overlay position-absolute w-100 h-100  opacity-50"></div>
      <div className="container position-relative z-2">
      <h1 className="display-4 fw-bold text-white ">
  {language === 'am' ? 'ባር እና ምግብ ቤት' : 'Bar & Restaurant'}
</h1>

<p className="lead mt-2">
  {language === 'am' 
    ? 'በዘመናዊ ወጥ ቤታችን፣ በሙያተኛ ሰራተኞቻችን  ፣ በተለያዩ የመመገቢያ እና  የባር አገልግሎቶች ይደሰቱ።' 
    : 'Enjoy our modern kitchen, professional staff, and a variety of dining and bar services.'}
</p>
      </div>
    </section>
  );
};

export default BarHero;
