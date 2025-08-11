import React, { useState, useEffect } from 'react';
import bg1 from '../assets/images/Bar_.webp';
import bg2 from '../assets/images/bar_11.webp';
import bg3 from '../assets/images/bg_13.webp';


const images = [bg3, bg1, bg2];

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
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width: '100%',
        transition: 'background-image 1s ease-in-out',
        position: 'relative',
      }}
    >
      <div className="overlay position-absolute w-100 h-100  opacity-50"></div>
      <div className="container position-relative z-2">
      <h1 className="display-4 fw-bold text-white ">
  {language === 'am' ? 'ባር እና ሬስቶራንት' : 'Bar & Restaurant'}
</h1>

<p className="lead mt-2">
  {language === 'am' 
    ? 'የኢትዮጵያን ባህላዊ ጣዕሞች ከተለያዩ ዓለም አቀፍ ምግቦችና መጠጦች በጥራት እና በተመጣጣኝ ዋጋ ማጣጣም ይችላሉ።' 
    : 'Indulge in a menu that blends authentic Ethiopian flavors with a rich variety of international dishes.'}
</p>
      </div>
    </section>
  );
};

export default BarHero;
