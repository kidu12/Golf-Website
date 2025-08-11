import React, { useRef, useState } from 'react';

import court from '../assets/images/golf_store.webp';
import court1 from '../assets/images/green.webp';
import court2 from '../assets/images/Golf_2.webp';
import coach from '../assets/images/bg1.webp';
import kids from '../assets/images/Golf_4.webp';
import green from '../assets/images/Golf_1.webp';
import green2 from '../assets/images/Golf_3.webp';
import '../styles/gallery.css';

const images = [court,court1, court2, coach, kids, green, green2];

const TennisGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
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
              <div className="gallery-image-wrapper" key={i} onClick={() => setModalImage(img)}>
                <img src={img} className="gallery-image" alt={`tennis-${i}`} />
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

export default TennisGallery;
