import React, { useEffect, useState } from 'react';

import court1 from '../assets/images/Court_4.webp';
import court2 from '../assets/images/Court_2.webp';
import court3 from '../assets/images/Court_5.webp';

const images = [court1, court2, court3];

const TennisHero = ({ language }) => {
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
        position: 'relative',
      }}
    >
      <div className="overlay position-absolute w-100 h-100 opacity-50"></div>
      <div className="container position-relative z-2">
     <h1 className="display-4 fw-bold text-white">
  {language === 'en' ? 'Tennis Court' : 'ቴኒስ መጫዎቻ'}
</h1>
<p className="lead mt-2">
  {language === 'en'
    ? 'Multi-purpose courts for sports, events, and healthy living.'
    : 'ለስፖርት፣ ለዝግጅቶች እና ለጤናማ ኑሮ የሚያገለግል ብዙ ዓላማ ያለው ይቴኒስ መጫዎቻዎች።'
  }
</p>

      </div>
    </section>
  );
};

export default TennisHero;
