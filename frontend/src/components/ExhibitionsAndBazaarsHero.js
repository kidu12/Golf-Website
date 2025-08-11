import React, { useState, useEffect } from 'react';
import garden1 from '../assets/images/event_04.webp';
import garden2 from '../assets/images/event_05.webp';
import garden3 from '../assets/images/event_06.webp';

const images = [garden1, garden2, garden3];

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
      <div className="overlay position-absolute w-100 h-100  opacity-50"></div>
      <div className="container position-relative z-2">
        <h1 className="display-4 fw-bold text-white">
  {language === 'en' ? 'Exhibitions and Bazaars' : 'ኤግዚቢሽኖች እና ባዛሮች'}
</h1>
<p className="lead mt-2">
  {language === 'en' 
    ? 'An ideal place for high-level Exhibitions, Bazaars, and private events.' 
    : 'ለከፍተኛ ደረጃ ኤግዚቢሽኖች ፣ ባዛሮች እና ለግል ዝግጅቶች ተስማሚ ቦታ።'
  }
</p>

      </div>
    </section>
  );
};

export default ExhibitionsAndBazaarsHero;













