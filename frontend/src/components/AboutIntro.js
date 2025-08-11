import React from 'react';
import clubImage from '../assets/images/bg1.webp';
import '../styles/About.css';

const AboutIntro = ({ language }) => {
  return (
    <section className="py-5 about-intro-section" id="about-intro">
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src={clubImage} alt="Officers Club" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6">
<h2 className="fw-bold mb-3">
  {language === 'en' 
    ? 'About Ethiopian Defense Force Officers Club' 
    : 'ስለ መኮንኖች ክበብ'}
</h2>


<p>
  {language === 'en' 
    ? `Welcome to the Defence Force Officers Club, a distinguished establishment since 1992, located in the heart
     of Addis Ababa’s Lideta sub-city. ust 100 meters from the main road and directly across from the renowned Torhayloch Hospital.our club is set within the tranquil grounds of the Ministry of Defence Army Foundation.

At the Defence Force Officers Club, we offer a serene  oasis designed for relaxation and leisure, featuring premier
 hotel services and recreational facilities. We proudly serve military personnel, civilians, and both governmental and non-governmental organizations.
 
 Our dedicated team of highly trained professionals is committed to delivering an exceptional experience that exceeds your expectations.
Join us and immerse yourself in a welcoming atmosphere where quality service and tranquility unite, making your visit truly unforgettable.
    `
    : `የመኮንኖች ክበብ ከ1992 ዓ.ም በፊት የተመሰረተና  
    በኢትዮጵያ ፣አዲስ አበባ፣ልደታ ክ/ከተማ ፣ ጦር ሃይሎች፣ ከጦር ሃይሎች ሆስፒታል ፊት ለፊት 
    (መንገድ ተሻግሮ) 100 ሜትር ገባ ብሎ ይገኛል።በተጨማሪም ክበቡ ከተመሰረተ ጀምሮ ለወታደራዊ አባላትና
     ቤተሰቦቻቸው፣ ለመንግስታዊ እና መንግሥታዊ ላልሆኑ ድርጅቶችና ህዝቦች የተለያዩ ዝግጅቶችን በሚቀርብለት ጥያቄ መሰረት 
     የሆቴል፣ የባር፣ የጅም፣ የሜዳቴንስ፣ የጋብቻ እና ምርቃት 
    ዝግጅት የአዳራሽ ኪራይ እና ሌሎች አገልግሎቶችን በተመጣጣኝ ዋጋ እና በጥራት እያቀረበ ይገኛል።`
  }
</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
