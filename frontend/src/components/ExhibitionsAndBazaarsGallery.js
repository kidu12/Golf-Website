import React, { useRef, useState } from 'react';
import '../styles/gallery.css';

// Import your gallery images here
import image1 from '../assets/images/event_05.webp';
import image2 from '../assets/images/event_06.webp';
import image3 from '../assets/images/event_07.webp';
import image4 from '../assets/images/event_08.webp';

const images = [image1, image2, image3, image4];

const ExhibitionsAndBazaarsGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const scroll = (direction) => {
    const scrollAmount = 400;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
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
    <section className="gallery-wrapper py-5 bg-dark text-white" data-aos="fade-up">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center text-white">
          {language === 'am' ? 'የኤግዚቢሽን እና ባዛር ጋለሪ' : 'Exhibitions & Bazaars Gallery'}
        </h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((src, index) => (
              <div className="gallery-image-wrapper" key={index} onClick={() => openModal(index)}>
                <img src={src} className="gallery-image" alt={`Exhibition or Bazaar ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      </div>

      {/* Fullscreen modal */}
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

export default ExhibitionsAndBazaarsGallery;
