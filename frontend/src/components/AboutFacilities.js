import React from 'react';
import { FaGolfBall, FaUtensils, FaTree, FaDumbbell, FaBell, FaUsers, FaBlender, FaChild, FaCar, FaCoffee, FaConciergeBell, FaStore } from 'react-icons/fa';

const AboutFacilities = ({ language }) => {
  const facilities = [
    {
      icon: <FaGolfBall className="fs-1 mb-3 text-success" />,
      title: { en: 'Golf Course', am: 'የጎልፍ ስፖርት' },
      description: { en: 'An 18-hole course for all skill levels.', am: 'ለሁሉም የክህሎት ደረጃዎች የተዘጋጀ ባለ 18-ቀዳዳ ሜዳ።' },
    },
    {
      icon: <FaUtensils className="fs-1 mb-3 text-success" />,
      title: { en: 'Bar & Restaurant', am: 'ባር እና ሬስቶራንት' },
      description: { en: 'A variety of drinks and fine dining.', am: 'የተለያዩ መጠጦች እና ምርጥ ምግቦች።' },
    },
    {
      icon: <FaTree className="fs-1 mb-3 text-success" />,
      title: { en: 'Garden & Grounds', am: 'አረንጓዴ ስፍራ' },
      description: { en: 'A beautiful space for relaxation and events.', am: 'ለመዝናናት እና ለዝግጅቶች የሚያምር ስፍራ።' },
    },
    {
      icon: <FaBell className="fs-1 mb-3 text-success" />,
      title: { en: 'Room Service', am: 'ክፍል አገልግሎት' },
      description: { en: 'Attentive service delivered to your room.', am: 'በክፍልዎ ውስጥ የሚቀርብልዎ በትኩረት የተሞላ አገልግሎት።' },
    },
    {
      icon: <FaDumbbell className="fs-1 mb-3 text-success" />,
      title: { en: 'Fitness & Gym', am: 'ፊትነስ እና ጂም' },
      description: { en: 'State-of-the-art equipment for your fitness needs.', am: 'ለጤንነትዎ ዘመናዊ መሣሪያዎች።' },
    },
    {
      icon: <FaUsers className="fs-1 mb-3 text-success" />,
      title: { en: 'VIP Conference Room', am: 'አዳራሽ አገልግሎት' },
      description: { en: 'Ideal for meetings and private events.', am: 'ለስብሰባዎች እና ለግል ዝግጅቶች ተስማሚ።' },
    },
    {
      icon: <FaBlender className="fs-1 mb-3 text-success" />,
      title: { en: 'Juice Bar', am: 'የፍራፍሬ ጭማቂ ባር' },
      description: { en: 'Fresh and healthy juices.', am: 'ትኩስ እና ጤናማ ጭማቂዎች።' },
    },
    {
      icon: <FaChild className="fs-1 mb-3 text-success" />,
      title: { en: 'Childrens Playground', am: 'የልጆች መጫወቻ' },
      description: { en: 'A safe and fun place for kids.', am: 'ለልጆች አስተማማኝ እና አስደሳች ቦታ።' },
    },
    {
      icon: <FaCar className="fs-1 mb-3 text-success" />,
      title: { en: 'Car Wash', am: 'የመኪና ማጠቢያ' },
      description: { en: 'Professional car cleaning services.', am: 'የባለሙያ የመኪና ማጽጃ አገልግሎቶች።' },
    },
    {
      icon: <FaCoffee className="fs-1 mb-3 text-success" />,
      title: { en: 'Coffee Ceremony', am: 'የቡና ሥነ-ስርዓት' },
      description: { en: 'Experience the traditional Ethiopian coffee ceremony.', am: 'ባህላዊ የኢትዮጵያ የቡና ሥነ-ሥርዓትን ይለማመዱ።' },
    },
    {
      icon: <FaConciergeBell className="fs-1 mb-3 text-success" />,
      title: { en: 'Catering Service', am: 'የምግብ አቅርቦት አገልግሎት' },
      description: { en: 'Delicious catering for your events.', am: 'ለዝግጅቶችዎ ጣፋጭ የምግብ አቅርቦት።' },
    },
    {
      icon: <FaStore className="fs-1 mb-3 text-success" />,
      title: { en: 'Exhibitions & Bazaars', am: 'ኤግዚቢሽኖች እና ባዛሮች' },
      description: { en: 'Versatile spaces for exhibitions and bazaars.', am: 'ለኤግዚቢሽኖች እና ለባዛሮች ሁለገብ ቦታዎች።' },
    },
  ];

  return (
    <>
      <style>
        {`
          .facility-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .facility-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
        `}
      </style>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            {language === 'en' ? 'Our Facilities' : 'የእኛ ተቋማት'}
          </h2>
          <div className="row text-center">
            {facilities.map((facility, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="p-4 border rounded shadow-sm h-100 facility-card">
                  {facility.icon}
                  <h5 className="fw-bold">{language === 'en' ? facility.title.en : facility.title.am}</h5>
                  <p className="text-muted">{language === 'en' ? facility.description.en : facility.description.am}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFacilities;
