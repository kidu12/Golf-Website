import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/testimonial.css';

const Testimonial = ({ language }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonials/approved`);
        
        // Safe: Make sure it's an array before setting
        if (Array.isArray(res.data)) {
          setTestimonials(res.data);
        } else {
          console.warn("Unexpected testimonial response:", res.data);
          setTestimonials([]); // Prevent crash
        }
      } catch (error) {
        console.error('Failed to fetch testimonials', error);
        setTestimonials([]); // Fallback to prevent white screen
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 testimonial-heading">
          {language === 'am' ? 'የእንግዶች አስተያየት' : 'What Our Guests Say'}
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={testimonials.length > 2} // Only loop if enough slides
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {Array.isArray(testimonials) && testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card shadow-sm h-100 p-4 testimonial-card">
                <p className="testimonial-text">“{item.message}”</p>
                <hr />
                <h6 className="fw-bold mb-0">{item.name}</h6>
                <small className="text-muted">
                  {language === 'en' ? 'Guest' : 'እንግዳ'}
                </small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
