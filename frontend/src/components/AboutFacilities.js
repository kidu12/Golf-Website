import React from 'react';
import {
  FaGolfBall, FaUtensils, FaTree, FaBell, FaDumbbell, FaUsers, 
  FaBlender, FaChild, FaCar, FaCoffee, FaConciergeBell, FaStore
} from 'react-icons/fa';

const AboutFacilities = ({ language }) => {
  const facilities = [
    { icon: <FaGolfBall />, title: { en: 'Golf Course', am: 'የጎልፍ ስፓርት አገልግሎት ' }, description: { en: 'An 18-hole course for all skill levels.', am: 'ለሁሉም የክህሎት ደረጃዎች የሚሆን ባለ 18-ቀዳዳ ኮርስ' } },
    { icon: <FaUtensils />, title: { en: 'Bar & Restaurant', am: 'ባር እና ሬስቶራንት' }, description: { en: 'A variety of drinks and fine dining.', am: 'የተለያዩ መጠጦች እና ምርጥ ምግቦች' } },
    { icon: <FaTree />, title: { en: 'Garden & Grounds', am: 'የአትክልት ስፍራዎች' }, description: { en: 'A beautiful space for relaxation and events.', am: 'ለመዝናናት እና ለዝግጅቶች የሚያምር ቦታ' } },
    { icon: <FaBell />, title: { en: 'Room Service', am: 'የተሟላ የመኝታ አገልግሎት' }, description: { en: 'Attentive service delivered to your room.', am: 'በትኩረት የሚሰጥ አገልግሎት ወደ ክፍልዎ ይደርሳል' } },
    { icon: <FaDumbbell />, title: { en: 'Fitness & Gym', am: 'የጂምናዚየም አገልግሎት' }, description: { en: 'State-of-the-art equipment for your fitness needs.', am: 'ለአካል ብቃት ፍላጎቶችዎ ዘመናዊ መሣሪያዎች' } },
    { icon: <FaUsers />, title: { en: 'VIP Conference Room', am: 'የስብሰባ አዳራሽ አገልግሎት' }, description: { en: 'Ideal for meetings and private events.', am: 'ለስብሰባዎች እና ለግል ዝግጅቶች ተስማሚ' } },
    { icon: <FaBlender />, title: { en: 'Juice Bar', am: 'የጁስ ባር' }, description: { en: 'Fresh and healthy juices.', am: 'ትኩስ እና ጤናማ ጭማቂዎች' } },
    { icon: <FaChild />, title: { en: 'Childrens Playground', am: 'የልጆች መጫወቻ ቦታ' }, description: { en: 'A safe and fun place for kids.', am: 'ለልጆች አስተማማኝ እና አስደሳች ቦታ' } },
    { icon: <FaCar />, title: { en: 'Car Wash', am: 'የመኪና ማጠቢያ' }, description: { en: 'Professional car cleaning services.', am: 'የባለሙያ የመኪና ጽዳት አገልግሎቶች' } },
    { icon: <FaCoffee />, title: { en: 'Coffee Ceremony', am: 'የቡና ሥነ-ስርዓት' }, description: { en: 'Experience the traditional Ethiopian coffee ceremony.', am: 'ባህላዊውን የኢትዮጵያ የቡና ሥነ-ሥርዓት ይለማመዱ' } },
    { icon: <FaConciergeBell />, title: { en: 'Catering Service', am: 'የምግብ አቅርቦት አገልግሎት' }, description: { en: 'Delicious catering for your events.', am: 'ለዝግጅቶችዎ ጣፋጭ የምግብ አቅርቦት' } },
    { icon: <FaStore />, title: { en: 'Exhibitions & Bazaars', am: 'ኤግዚቢሽኖች እና ባዛሮች' }, description: { en: 'Versatile spaces for exhibitions and bazaars.', am: 'ለኤግዚቢሽኖች እና ለባዛሮች ሁለገብ ቦታዎች' } },
  ];

  const facilityCardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    height: '100%',
    transition: 'transform 0.2s',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    color: '#3a6a47',
    marginBottom: '15px',
  };

  return (
    <div className="facilities-section py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          {facilities.map((facility, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div style={facilityCardStyle}>
                <div style={iconStyle}>{facility.icon}</div>
                <h5 className="fw-bold" style={{color: '#3a6a47'}}>{facility.title[language]}</h5>
                <p className="text-muted">{facility.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFacilities;
