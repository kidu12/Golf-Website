import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/kids_2.webp';
import image2 from '../assets/images/kids_3.webp';
import image3 from '../assets/images/kids_4.webp';

const images = [image1, image2, image3];

const PlaygroundHero = ({ language }) => {
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
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width: '100%',
        transition: 'background-image 1s ease-in-out',
        position: 'relative',
      }}
    >

    </section>
  );
};

export default PlaygroundHero;
