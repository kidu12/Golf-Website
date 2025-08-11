import React, { useRef, useState } from 'react';

import '../styles/gallery.css';

import gym1 from '../assets/images/Gym-10.webp';
import gym2 from '../assets/images/Gym-1.webp';
import gym3 from '../assets/images/Gym-13.webp';
import gym4 from '../assets/images/Gym-5.webp';
import gym5 from '../assets/images/Gym-2.webp';

const images = [gym1, gym2, gym3, gym4, gym5];

const GymGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <section className="gallery-wrapper py-5 bg-dark text-white">
      <div className="container">
<h2 className="fw-bold mb-4 text-center text-white">
  {language === 'am' ? 'የጂም ጋለሪ' : 'Our Gym Gallery'}
</h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((img, i) => (
              <div className="gallery-image-wrapper" key={i} onClick={() => setModalImage(img)}>
                <img src={img} className="gallery-image" alt={`gym-${i}`} />
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>

      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} className="modal-img" alt="preview" />
          <button className="close-btn" onClick={() => setModalImage(null)}>×</button>
        </div>
      )}
    </section>
  );
};

export default GymGallery;
