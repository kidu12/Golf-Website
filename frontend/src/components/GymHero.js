import React, { useEffect, useState } from 'react';
import gym1 from '../assets/images/Gym-2.webp';
import gym2 from '../assets/images/Gym-5.webp';
import gym3 from '../assets/images/Gym-3.webp';

const images = [gym1, gym2, gym3];

const GymHero = ({ language }) => {
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
        transition: 'background-image 1s ease-in-out',
        position: 'relative'
      }}
    >
      <div className="overlay position-absolute w-100 h-100  opacity-50"></div>
      <div className="container position-relative z-2">
        <h1 className="display-4 fw-bold text-white">
          {language === 'en' ? 'Gymnasium' : 'ጂምናዚየም'}
        </h1>
        <p className="lead mt-2">
          {language === 'en' 
            ? 'A complete and energizing fitness experience.' 
            : 'የተሟላ እና አነቃቂ የአካል ብቃት ተሞክሮ።'}
        </p>
      </div>
    </section>
  );
};

export default GymHero;
