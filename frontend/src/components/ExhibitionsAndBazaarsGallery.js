import React, { useRef, useState } from 'react';
import '../styles/gallery.css';

import img1 from '../assets/images/event_01.webp';
import img2 from '../assets/images/event_02.webp';
import img3 from '../assets/images/event_04.webp';
import img4 from '../assets/images/event_03.webp';
import img5 from '../assets/images/event_06.webp';
import img6 from '../assets/images//event_07.webp';

const images = [img1, img2, img3, img4, img5, img6];

const ExhibitionsAndBazaarsGallery = ({ language }) => {
  const scrollRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const title = language === 'am' ? 'የእኛ ማዕከለ-ስዕላት' : 'Our Gallery';

  return (
    <section className="gallery-wrapper py-5 bg-dark text-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center text-white">
          {title}
        </h2>
        <div className="gallery-scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
          <div className="gallery-scroll" ref={scrollRef}>
            {images.map((img, i) => (
              <div className="gallery-image-wrapper" key={i} onClick={() => setModalImage(img)}>
                <img src={img} className="gallery-image" alt={`Gallery image ${i + 1}`} />
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

export default ExhibitionsAndBazaarsGallery;
