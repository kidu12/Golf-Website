import React, { useRef, useState } from 'react';
import steam from '../assets/images/Room_02.webp';
import locker from '../assets/images/Room_07.webp';
import massage from '../assets/images/Room_03.webp';
import interior from '../assets/images/Room_04.webp';
import decor from '../assets/images/Room_01.webp';
import room2 from '../assets/images/room_2.webp';
import room3 from '../assets/images/room_3.webp';

const images = [steam, locker, massage, interior, decor,room3, room2];

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
  {language === 'am' ? 'ሳውና እና የማሳጅ ጋለሪ' : 'Sauna Bath & Massage Gallery'}
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
