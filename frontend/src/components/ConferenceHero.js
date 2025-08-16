import React, { useState, useEffect } from 'react';
import garden1 from '../assets/images/hall_1.webp';
import garden2 from '../assets/images/hall_5.webp';
import garden3 from '../assets/images/hall_3.webp';

const images = [garden1, garden2, garden3];

const ConferenceHero = ({ language }) => {
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
      
    </section>
  );
};

export default ConferenceHero;













