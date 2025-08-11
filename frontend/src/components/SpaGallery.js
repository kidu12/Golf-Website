import React, { useRef, useState } from 'react';
import steam from '../assets/images/Spa-1.webp';
import locker from '../assets/images/Spa-4.webp';
import massage from '../assets/images/Spa-3.webp';
import interior from '../assets/images/Spa-2.webp';
import decor from '../assets/images/Spa-7.webp';

const images = [steam, locker, massage, interior, decor];

const SpaGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <section className="gallery-wrapper py-5 bg-dark text-white ">
      <div className="container">
<h2 className="fw-bold mb-4 text-center text-white">
  {language === 'am' ? 'ስፓ እና ስቲም ማዕከል ጋለሪ' : 'Spa & Steam Center Gallery'}
</h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((img, i) => (
              <div className="gallery-image-wrapper" key={i} onClick={() => setModalImage(img)}>
                <img src={img} className="gallery-image" alt={`spa-${i}`} />
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

export default SpaGallery;
