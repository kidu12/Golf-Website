import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import GolfCourseImage from '../assets/images/bg1.webp';
import BarRestaurantImage from '../assets/images/bg_12.webp';
import GardenGroundsImage from '../assets/images/gardon_fild.webp';
import RoomServiceImage from '../assets/images/Room_02.webp';
import FitnessGymImage from '../assets/images/Gym-2.webp';
import ConferenceRoomImage from '../assets/images/hall_9.webp';
import JuiceBarImage from '../assets/images/juice_bar_image.webp';
import PlaygroundImage from '../assets/images/kids_2.webp';
import CarWashImage from '../assets/images/car_wash.webp';
import CoffeeCeremonyImage from '../assets/images/coffe.webp';
import CateringServiceImage from '../assets/images/catring_10.webp';
import ExhibitionsImage from '../assets/images/event_05.webp';
import OthersImage from '../assets/images/logo.webp'; 
import '../styles/services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

  
const Services = ({ language })  => {
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

  const services = [
    {
      title: { en: 'Golf Sport & Course ', am: 'የጎልፍ ስፖርት እና ስልጠና  ' },
      description: { en: 'Nestled within the tranquil landscape, our 18-hole private resort course offers an enriching experience for golfers of all skill levels. With a par of 70 and a total length of 5,529 meters, the course is expertly designed to provide both challenge and enjoyment.', am: 'በኢትዮጵያ የመጀመሪያና ብቸኛ አለም አቀፍ ደረጃን የጠበቀ፤ 18 ጉድጓዶች ያሉት፣ አሰልጣኞችን ከተሟሉ የጎልፍ መጫዎቻ እቃዎች ጋር ያሟላ የጎልፍ ሜዳ ስለሆነ መጥተው ይጎብኙን። በሁለገብ አገልግሎቶቻችን ይረካሉ፡፡ በተጨማሪም ከፍተኛ ልምድና እውቀት ያላቸው አሰልጣኞቹን በመጠቀም የጎልፍ ጫዎታን ለጀማሪዎች በማሰልጠን ለከፍተኛ ውድድር እንዲበቁ እናደርጋለን።' },
      image: GolfCourseImage,
      link: '/services/tennis-court'
    },
    {
      title: { en: 'Bar & Restaurant', am: 'ባር እና ሬስቶራንት' },
      description: { en: 'our restaurant features a state-of-the-art kitchen managed by talented chefs and a dedicated team focused on culinary excellence. Guests can savor a thoughtfully crafted menu that harmoniously combines traditional Ethiopian flavors with an extensive selection of international dishes.', am: 'ለአይን በሚስብና መንፈስን በሚያድስ አረንጓዴ አካባቢ ውስጥ በሰለጠኑ ሸፎቻችን ጥራት እና ጣዕም ያላቸው ባህለዊ እና የውጭ ምግቦችንና መጠጦችን በተመጣጣኝ ዋጋ ከማራኪ መስተንግዶ ጋር ስለምናቀርብ  መጥተው እየተዝናኑ ያጣጥሙ።' },
      image: BarRestaurantImage,
      link: '/services/bar-restaurant'
    },
    {
      title: { en: 'Juice Bar', am: 'የጁስ ባር' },
      description: { en: 'Our Juice Bar offers a vibrant selection of freshly squeezed juices and healthy blends, perfect for a refreshing break. Choose from seasonal fruits, energizing smoothies, and custom wellness drinks—all prepared on the spot.', am: 'የፍራፍሬ ጭማቂ ባራችን ከተፈጥሮ ፍራፍሬዎች የተዘጋጀ በጤና ላይ የተመሰረተ የጭማቂ እና የስሙዚ ምርጫ ያቀርባል። ከጨዋታ ወይም እንቅስቃሴ በኋላ ለመማማት ወይም ለመቀዝቀዝ ተስማሚ ነው።' },
      image: JuiceBarImage,
      link: '/services/juice-bar'
    },
    {
      title: { en: 'Childrens Playground', am: 'የልጆች መጫወቻ ቦታ' },
      description: { en: 'A safe and fun playground for children to enjoy while you relax. The playground is equipped with modern and secure play structures, offering an engaging space that encourages creativity, activity, and social interaction for young visitors.', am: 'እርስዎ በሚያርፉበት ጊዜ ልጆችዎ በደስታ እንዲጫወቱበት የተዘጋጀ አስተማማኝ እና አስደሳች የመጫወቻ ስፍራ። የመጫወቻ ስፍራው በዘመናዊ እና አስተማማኝ የመጫወቻ አወቃቀሮች የተገጠመለት ነው።' },
      image: PlaygroundImage,
      link: '/services/childrens-playground'
    },   
    {
      title: { en: 'Car Wash', am: 'የመኪና ማጠቢያ' },
      description: { en: 'Keep your vehicle sparkling clean with our professional car wash service. We offer a range of cleaning packages, from a quick exterior wash to a full interior and exterior detailing, ensuring your car leaves looking fresh and well cared for.', am: 'ፕሮፌሽናል በሆነው የመኪና እጥበት አገልግሎታችን መኪናዎን ንፁህ እና አንጸባራቂ ያድርጉት። ከፈጣን የውጪ እጥበት እስከ ሙሉ የውስጥ እና የውጪ ዝርዝር ክሊኒንግ ድረስ የተለያዩ የጽዳት ፓኬጆችን እናቀርባለን።' },
      image: CarWashImage,
      link: '/services/car-wash'
    },
    {
      title: { en: 'Traditional Ethiopian Coffee Ceremony', am: 'ለባህላዊ የቡና ሥነ-ስርዓት' },
      description: { en: 'Experience the rich cultural heritage of Ethiopia with our traditional coffee ceremony. A unique and authentic experience for our guests, perfect for relaxing, connecting, and savoring the rich aroma of freshly brewed coffee.', am: 'የኢትዮጵያን የበለጸገ የባህል ቅርስ በባህላዊ የቡና አፈላል ስነ ስርዓታችን ይለማመዱ። ለእንግዶቻችን ልዩ እና እውነተኛ የሆነ ተሞክሮ።' },
      image: CoffeeCeremonyImage,
      link: '/services/coffee-ceremony'
    },
    {
      title: { en: 'Indoor and Outdoor Catering Service', am: 'የቤት ውስጥ እና የውጪ የምግብ አቅርቦት አገልግሎት' },
      description: { en: 'Our catering services extend to both indoor and outdoor events, providing a seamless and high-quality dining experience, tailored to suit any occasion with delicious menus and impeccable service.', am: 'የምግብ አቅርቦት አገልግሎታችን ለቤት ውስጥ እና ለውጪ ዝግጅቶች የሚዘልቅ ሲሆን እንከን የለሽ እና ከፍተኛ ጥራት ያለው የመመገቢያ ተሞክሮን ይሰጣል።' },
      image: CateringServiceImage,
      link: '/services/catering'
    },
    {
      title: { en: 'Exhibitions & Bazaars', am: 'ኤግዚቢሽኖች እና ባዛሮች' },
      description: { en: 'We provide versatile spaces perfect for hosting memorable exhibitions and vibrant bazaars, creating the ideal setting for showcasing products, art, and culture to a wide audience.', am: 'የማይረሱ ኤግዚቢሽኖችን እና ንቁ ባዛሮችን ለማስተናገድ ፍጹም የሆኑ ሁለገብ ቦታዎችን እናቀርባለን።' },
      image: ExhibitionsImage,
      link: '/services/exhibitions-bazaars'
    },
    {
      title: { en: 'Room Service', am: 'የተሟላ የመኝታ አገልግሎት' },
      description: { en: 'Enjoy the convenience of our 24/7 room service. Whether its a late-night snack or a full-course meal, our extensive menu offers a wide variety of options delivered right to your door, ensuring comfort and satisfaction at any hour.', am: 'ድርጅታችን የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ ፅዱ እና ምቹ የምኝታ አገልግሎት በተመጣጣኝ ዋጋ ፤ ከተሟላ ፋሲሊቲ ጋር 7/24 እናቀርባለን።' },
      image: RoomServiceImage,
      link: '/services/spa-steam-center'
    },
    {
      title: { en: 'Fitness & Gym', am: 'የጂምናዚየም አገልግሎት' },
      description: { en: 'Our state-of-the-art gym is tailored to meet the fitness needs of all our guests. It is equipped with advanced workout machines, free weights, and designated areas for both cardio and strength training, ensuring a comprehensive and motivating fitness experience.', am: 'በስፖርት ሳይንስ በሰለጠኑ የድርጅታችን ሰራተኞች በመታገዝ በአረንጓዴ የተሸፈነ ማራኪ ተፈጥሮን እየተመለከቱ የተሟላ ስፓርታዊ እንቅስቃሴ ለማድረግ ምቹ የሆነ የጅም አገልግሎት በተመጣጣኝ ዋጋ መጠቀም ይችላሉ።' },
      image: FitnessGymImage,
      link: '/services/gym-center'
    },
    {
      title: { en: 'Garden & Grounds', am: 'የአትክልት እና ግቢ' },
      description: { en: 'The beautifully landscaped garden remains lush and vibrant year-round, providing a breathtaking outdoor venue for various events. With a capacity to accommodate 10,000 to 15,000 guests, it offers the perfect setting for weddings, concerts, cultural festivals, and grand celebrations.', am: 'የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ ዓመቱን ሙሉ በሚያምር ሁኔታ አረንጓዴ ለምለም ሆኖ የሚቆይ ከ650,000 ካሬ ሜትር ስፋት ያለው ሰፊ ቦታ ነው። በተጨማሪም ከ10,000-15,000 እንግዶችን ማስተናገድ የሚችለው ይህ ቦታ ለጋብቻዎች፣ ለኮንሰርቶች እና ለፌስቲቫሎች ተስማሚ ነው።' },
      image: GardenGroundsImage,
      link: '/services/garden-grounds'
    },
    {
      title: { en: 'VIP Conference Room', am: 'የስብሰባ አዳራሽ አገልግሎት' },
      description: { en: 'Our VIP meeting room is ideal for high-level meetings, trainings, and private events. Equipped with modern furnishings, specialized equipment, and a comfortable atmosphere, it provides an exclusive and productive space for up to 30 guests.', am: 'ድርጅታችን የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ ጎልፍ ክለብ ከ 30 እስከ 50 ተሳታፊዎች ማስተናገድ የሚችል ምቹ እና ፅዱ የመሰብሰቢያ አዳራሽ ያቀርባል።' },
      image: ConferenceRoomImage,
      link: '/services/conference-hall'
    },
  ];

  return (
    <section className="py-5 services-section" id="services" ref={sectionRef}>
      <div className="container">
<h2 className="text-center mb-5 fw-bold" style={{ color: '#4D784E' }}>
  {language === 'en' ? 'Our Services' : 'የእኛ አገልግሎቶች'}
</h2>
        <div className="row">
          {services.map((service, index) => (
           <div
  className="col-md-6 col-lg-4 mb-4"
  key={index}
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
<ServiceCard
  link={service.link}       
  title={service.title[language]}
  description={service.description[language]}
  image={service.image}
  language={language}       
/>

</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;