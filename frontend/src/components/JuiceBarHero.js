import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/juice_bar_image.webp';
import image2 from '../assets/images/juice_2.webp';
import image3 from '../assets/images/juice_3.webp';

const images = [image1, image2, image3];

const JuiceBarHero = ({ language }) => {
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
      <div className="overlay position-absolute w-100 h-100 opacity-50"></div>
      <div className="container position-relative z-2">
        <h1 className="display-4 fw-bold text-white ">
          {language === 'am' ? 'የፍራፍሬ ጭማቂ ባር' : 'Juice Bar'}
        </h1>
        <p className="lead mt-2">
          {language === 'am' 
            ? 'ጤናማ እና ትኩስ'
            : 'Healthy and Refreshing'}
        </p>
      </div>
    </section>
  );
};

export default JuiceBarHero;
