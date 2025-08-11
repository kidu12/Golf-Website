import React, { useEffect, useState } from 'react';
import room1 from '../assets/images/Room_04.webp'; // TODO: Replace with actual room images
import room2 from '../assets/images/Room_06.webp';
import room3 from '../assets/images/Room_02.webp';

const heroImages = [room2, room3, room1];

const SpaHero = ({ language }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="d-flex align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${heroImages[index]})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        position: 'relative',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="overlay position-absolute w-100 h-100  opacity-50"></div>
      <div className="container position-relative z-2">
       <h1 className="display-4 fw-bold text-white">
  {language === 'am' ? 'የመኝታ አገልግሎት' : 'Room Service'}
</h1>

<p className="lead mt-2">
  {language === 'am' 
    ? 'ፅዱ እና ምቹ የመኝታ አገልግሎት በተመጣጣኝ ዋጋ ፤ ከተሟላ ፋሲሊቲ ጋር እናቀርባለን።' 
    : 'Experience comfort and relaxation in our luxurious rooms.'}
</p>

      </div>
    </section>
  );
};

export default SpaHero;
