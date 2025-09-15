import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
import logo from '../assets/images/logo.webp';

// Desktop images
const desktopImages = [
  '/images/GERD_DS3.jpg',
  '/images/New_year.jpg',
  '/images/GERD4.webp.jpg',
  '/images/bg4.webp',
  '/images/Picture1.webp.webp',
  '/images/front_5.webp',
  '/images/golf_new_2.webp',
  '/images/bg2.webp',
  '/images/main_hall.webp',
  '/images/front_3.webp',
  '/images/bar_new_1.webp',
  '/images/bg_06.webp',
  '/images/golf_store.webp',
];

// Mobile images
const mobileImages = [
  '/images/Home/GERD_03.jpg',
  '/images/Home/New_year2.jpg',
  '/images/Home/GERD0_3.webp.jpg',
  '/images/Home/bg4.webp',
  '/images/Home/front_5.webp',
  '/images/Home/golf_new_2.webp',
  '/images/Home/bg2.webp',
  '/images/Home/main_hall.webp',
  '/images/Home/front_3.webp',
  '/images/Home/bar_new_1.webp',
  '/images/Home/bg_06.webp',
  '/images/Home/golf_store.webp',
];

const Hero = ({ language }) => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState(desktopImages);

  useEffect(() => {
    // Function to select the correct images based on screen size
    const updateImages = () => {
      if (window.innerWidth < 768) {
        setImages(mobileImages);
      } else {
        setImages(desktopImages);
      }
    };

    // Run on mount
    updateImages();

    // Run on resize
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  useEffect(() => {
    // Preload images
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="hero d-flex align-items-end justify-content-center text-white text-center">
      {/* Slideshow images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Hero background"
          className={`hero-image ${index === current ? 'active' : ''}`}
        />
      ))}

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      {current === 0 && (
        <div className="content">
          <h2 className="fw-bold text-white">
            {language === 'en'
              ? 'The Ethiopian Defense Forces Foundation Addis Ababa Golf Club would like to congratulate our employees, customers, and all our people on the inauguration of the long-awaited Renaissance Dam and wish you a peaceful, happy, and prosperous New Year.'
              : 'የመከላከያ ሠራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ የዘመናት ቁጭት የነበረው የሕዳሴ ግድብ በመመረቁ ለድርጅታችን ሠራተኞች,ደንበኞቻችን እና ለመላው ህዝባችን እንኳን ደስ አለን እያለ መጭው አዲስ ዓመት የሰላም፣የደስታና እና የብልፅግና እንዲሆንላችሁ መልካም ምኞቱን ይገልፃል።'}
          </h2>
          <p className="mt-1 fst-italic">Lt. Col. Zewdu Tulu (Manager of the organization)</p>
          <p className="mt-2">
            {language === 'en'
              ? 'Experience a warm welcome—our team is here to make you feel right at home!'
              : 'ይምጡ ይጎብኙን አዲስ አበባ ጎልፍ ክለብ ጊዜዎን የማይረሳ ለማድረግ ዝግጁ ነው!'}
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
