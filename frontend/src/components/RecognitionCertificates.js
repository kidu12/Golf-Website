import React, { useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/certificates.css'; // Optional for styling

import cert2 from '../assets/images/certificate_2.webp';
import cert5 from '../assets/images/certificate_5.webp';
import cert1 from '../assets/images/certificate_1.webp';
import cert3 from '../assets/images/certificate_3.webp';
import cert4 from '../assets/images/certificate_4.webp';
import cert6 from '../assets/images/certificate_6.webp';
import cert7   from '../assets/images/certificate_7.webp';

const images = [cert7, cert1, cert2, cert3, cert4, cert5, cert6];

Modal.setAppElement('#root');

const RecognitionCertificates = ({ language }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  return (
    <section className="certificate-section py-5">
      <div className="container">
            <h1 className="text-center fw-bold mb-4">
  {language === 'am' ? 'የ እውቅና የምስከር ወረቀት' : 'Certificate of appreciation'}
</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`certificate-slide ${idx === 0 ? 'certificate-slide-contain' : ''}`}
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Certificate ${idx + 1}`}
                  className="img-fluid rounded shadow-sm"
                  style={{ cursor: 'pointer', height: '250px', objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          className="fullscreen-modal"
          overlayClassName="fullscreen-overlay"
        >
          <button
            onClick={() => setModalOpen(false)}
            className="modal-close-btn"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Enlarged certificate"
            className="fullscreen-img"
          />
        </Modal>
      </div>
    </section>
  );
};

export default RecognitionCertificates;
