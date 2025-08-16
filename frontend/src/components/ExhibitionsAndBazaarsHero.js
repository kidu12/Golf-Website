import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/event_05.webp';
import image2 from '../assets/images/event_03.webp';
import image3 from '../assets/images/event_06.webp';

const images = [image1, image2, image3];

const ExhibitionsAndBazaarsHero = ({ language }) => {
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

export default ExhibitionsAndBazaarsHero;
