import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';
import hotelImage from '../assets/images/bg1.webp'; // replace with your actual image path

const AboutSection = ({ language }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section container my-5 ${visible ? 'fade-in' : ''}`}
    >
      <div className="row align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src={hotelImage}
            alt="Ethiopian Defense Forces Officers Club image "
            className="img-fluid rounded shadow-sm custom-img"
          />
        </div>
        <div className="col-md-7">
<h6 className="text-uppercase text-muted mb-2 about-label">
  {language === 'en' ? 'About Us' : 'ስለ እኛ'}
</h6>
<h2 className="about-heading">
  {language === 'en' 
    ? 'Your ideal holiday begins here!' 
    : 'የእርስዎ የማይረሳ የበዓል ዝግጅትዎን በዚህ ቦታ ይጀምሩ!'}
</h2>

<p className="text-secondary">
  {language === 'en'
    ? 'Welcome to the Defence Force Officers Club, a distinguished establishment since 1992, located in the heart of Addis Ababa’s Lideta sub-city. Just 100 meters from the main road and directly across from the renowned Torhayloch Hospital, our club is set within the tranquil grounds of the Ministry of Defence Army Foundation.At the Defence Force Officers Club, we offer a serene oasis designed for relaxation and leisure, featuring premier hotel services and recreational facilities. We proudly serve military personnel, civilians, and both governmental and non-governmental organizations. Our dedicated team of highly trained professionals is committed to delivering an exceptional experience that exceeds your expectations.'
    : 'የመኮንኖች ክበብ ከ1992 ዓ.ም በፊት የተመሰረተና በኢትዮጵያ ፣አዲስ አበባ፣ልደታ ክ/ከተማ ፣ ጦር ሃይሎች፣ ከጦር ሃይሎች ሆስፒታል ፊት ለፊት (መንገድ ተሻግሮ) 100 ሜትር ገባ ብሎ ይገኛል።በተጨማሪም ክበቡ ከተመሰረተ ጀምሮ ለወታደራዊ አባላትናቤተሰቦቻቸው፣ ለመንግስታዊ እና መንግሥታዊ ላልሆኑ ድርጅቶችና ህዝቦች የተለያዩ ዝግጅቶችን በሚቀርብለት ጥያቄ መሰረት  የሆቴል፣ የባር፣ የጅም፣ የሜዳቴንስ፣ የጋብቻ እና ምርቃት ዝግጅት የአዳራሽ ኪራይ እና ሌሎች አገልግሎቶችን በተመጣጣኝ ዋጋ እና በጥራት እያቀረበ ይገኛል።'}
</p>
<div className="text-center">
  <Link to="/about">
    <button className="btn btn-about-section mt-3">
      {language === 'en' ? 'Read More' : 'ተጨማሪ ያንብቡ'}
    </button>
  </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
