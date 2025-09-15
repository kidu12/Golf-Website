import React, { useRef, useState } from 'react';

import '../styles/gallery.css';


import garden1 from '../assets/images/new_vip_1.webp';
import garden2 from '../assets/images/hall_4.webp';
import crowd from '../assets/images/hall_8.webp';
import wedding from '../assets/images/new_vip_1.webp';

const images = [garden1, garden2, crowd, wedding];

const HallGallery = ({ language }) => {
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
  {language === 'en' ? 'Conference Hall Gallery' : 'የኮንፈረንስ አዳራሽ ጋለሪ'}
</h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((img, i) => (
              <div className="gallery-image-wrapper" key={i} onClick={() => openModal(i)}>
                <img src={img} className="gallery-image" alt={`hall-${i}`} />
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

export default HallGallery;
