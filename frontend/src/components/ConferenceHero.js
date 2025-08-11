import React, { useState, useEffect } from 'react';
import garden1 from '../assets/images/hall_9.webp';
import garden2 from '../assets/images/hall_2.webp';
import garden3 from '../assets/images/hall_8.webp';

const images = [garden1, garden2, garden3];

const GardenHero = ({ language }) => {
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
  {language === 'en' ? 'Conference Hall' : 'የኮንፈረንስ አዳራሽ'}
</h1>
<p className="lead mt-2">
  {language === 'en' 
    ? 'Fully equipped halls for weddings, meetings, and celebrations. Capacity from 60 to 1000 people.' 
    : 'ለጋብቻ፣ ስብሰባ እና በዓላት የተሟሉ መሣሪያዎች ያሏቸው አዳራሾች። ከ60 እስከ 1000 ሰዎች የሚያስተናግድ።'
  }
</p>

      </div>
    </section>
  );
};

export default GardenHero;













