import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutSection.css'; // Using the same style for consistency
import hotelImage from '../assets/images/bg5.webp'; // replace with your actual image path

const AboutIntro = ({ language }) => { // Renamed component
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
      className={`about-section container my-5 ${visible ? 'fade-in' : ''}`}>
      <div className="row align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src={hotelImage}
            alt="Addis Ababa Golf Club"
            className="img-fluid rounded shadow-sm custom-img"
          />
        </div>
        <div className="col-md-7">
        <h6 className="text-uppercase text-muted mb-2 about-label">
  {language === 'en' ? 'About Us' : 'ስለ እኛ'}
</h6>
<h2 className="about-heading">
  {language === 'en' 
    ? 'Your Perfect Golf Club Experience Begins Here With Us!' 
    : 'የእርስዎን  የጎልፍ ስፖርት ተሞክሮ በመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ ያሳልፉ!!'}
</h2>

<p className="text-secondary">
  {language === 'en'
    ? 'Welcome to the Defence Force Foundation Addis Ababa Golf Club, a prestigious institution established in 1992, situated in the heart of Addis Ababa’s Lideta sub-city, Torhayloch. Our club is nestled within the serene grounds of the Ministry of Defence Army Foundation. At the Addis Ababa Golf Club, we provide a tranquil retreat designed for relaxation and leisure, featuring top-tier hotel services, an exceptional golf course, and a variety of recreational facilities. We cater to military personnel, civilians, and both governmental and non-governmental organizations. Our committed team of highly trained professionals is dedicated to delivering an outstanding experience that consistently surpasses your expectations.'
    : 'እንኳን ወደ መከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ በደህና መጡ!! በአሁኑ ጊዜ የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ  ጎልፍ ክለብ የቀድሞ ስሙ አዲስ አበባ ጎልፍ ክለብ  በአፄ ሃ/ስላሴ ዘመነ መንግስት በ1949 ዓ.ም ግንባታው ተጀምሮ በ1952 ዓ.ም ተጠናቆ ሰራ እንደጀመረ ይነገራል። አሁን ላይ ለሰራዊቱ፣ ለሰራዊቱ ቤተሰብ እንዲሁም ለማህበረሰቡ  በስራ የደከመ አእምሯቸውን እንዲያሳርፍ፣ የእርስ በርስ ግንኙነታቸውን የሚያጠናክሩበት የመዝናኛ ማዕከል ነው።በተጨማሪም ክበቡ ከተመሰረተ ጀምሮ ለወታደራዊ አባላትና ቤተሰቦቻቸው፣ ለመንግስታዊ እና መንግሥታዊ ላልሆኑ ድርጅቶችና ግለሰቦች የተለያዩ ዝግጅቶችን በሚቀርብለት ጥያቄ መሰረት የሆቴል፣ የባር፣ የጅም፣ ጎልፍ መጫወቻ፣ የጋብቻ እና ምርቃት ዝግጅት፣ የአዳራሽ ኪራይ እና ሌሎች አገልግሎቶችን በተመጣጣኝ ዋጋ እና በጥራት እያቀረበ ይገኛል። ጎልፍ ክለብ በአዲስ አበባ፣ልደታ ክ/ከተማ ፣ ጦር ሃይሎች ይገኛል::'}
</p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
