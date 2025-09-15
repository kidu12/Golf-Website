import React, { useRef, useState } from 'react';

import court from '../assets/images/golf_store.webp';
import court1 from '../assets/images/green.webp';
import court2 from '../assets/images/Golf_2.webp';
import court3 from '../assets/images/golf_new_1.webp';
import court4 from '../assets/images/golf_new_3.webp';
import court5 from '../assets/images/golf_new_2.webp';
import coach from '../assets/images/bg1.webp';
import kids from '../assets/images/Golf_4.webp';
import green from '../assets/images/Golf_1.webp';
import green2 from '../assets/images/Golf_3.webp';
import '../styles/gallery.css';

const images = [court,court1, court2, court3, court4, court5, coach, kids, green, green2];

const GolfCourseGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const openModal = (index) => setCurrentImageIndex(index);
  const closeModal = () => setCurrentImageIndex(null);

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery-wrapper py-5 bg-dark text-white">
      <div className="container">
<h2 className="fw-bold mb-4 text-center text-white">
  {language === 'en' ? 'Golf Course Gallery' : 'ጎልፍ ጋለሪ'}
</h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((img, i) => (
              <div className="gallery-image-wrapper" key={i} onClick={() => openModal(i)}>
                <img src={img} className="gallery-image" alt={`golf-course-${i}`} />
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>

      {currentImageIndex !== null && (
        <div className="image-modal" onClick={closeModal}>
          <button className="modal-nav-btn prev" onClick={showPrevImage}>&lt;</button>
          <img src={images[currentImageIndex]} className="modal-img" alt="preview" />
          <button className="modal-nav-btn next" onClick={showNextImage}>&gt;</button>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
      )}
    </section>
  );
};

export default GolfCourseGallery;
