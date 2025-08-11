import React, { useRef, useState } from 'react';
import '../styles/gallery.css';
import image1 from '../assets/images/catring_32.webp';
import image2 from '../assets/images/catring_2.webp';
import image3 from '../assets/images/bar_001.webp';

const images = [image1, image2, image3];

const CateringServiceGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const scroll = (direction) => {
    const scrollAmount = 400;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="gallery-wrapper py-5 bg-dark text-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center text-white">
          {language === 'am' ? 'የምግብ አቅርቦት ጋለሪ' : 'Catering Service Gallery'}
        </h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((src, index) => (
              <div className="gallery-image-wrapper" key={index} onClick={() => setModalImage(src)}>
                <img src={src} className="gallery-image" alt={`catering-service-${index}`} />
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>

      {/* Fullscreen modal */}
      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} className="modal-img" alt="preview" />
          <button className="close-btn" onClick={() => setModalImage(null)}>×</button>
        </div>
      )}
    </section>
  );
};

export default CateringServiceGallery;
