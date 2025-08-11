import React from 'react';
import BarberImg from '../assets/images/barber-shop.webp';
import InteriorDecorationImg from '../assets/images/Decor_service.webp';
import SpaImg from '../assets/images/Spa-7.webp';
import PhotoShopImg from '../assets/images/Photo_sudio.webp';
import '../styles/PartnerServices.css';

const partnerServices = [
  {
    title: {
      en: 'Photo Shop',
      am: 'ፎቶ ሱቅ'
    },
    image: PhotoShopImg,
    description: {
      en: `Our on-site Photo Shop offers professional photography services for any occasion, from portraits to event coverage.`,
      am: `በግቢያችን ውስጥ የሚገኘው የፎቶ ሱቅ ለአጠቃላይ ዝግጅት የባለሙያ የፎቶግራፍ አገልግሎቶችን ያቀርባል። ከፎቶግራፎች እስከ ዝግጅት ሽፋን ድረስ።`
    }
  },
  {
    title: {
      en: 'Interior Decoration',
      am: 'የውስጥ ማስጌጥ'
    },
    image: InteriorDecorationImg,
    description: {
      en: `Our Interior Decoration service provides expert design to transform your events into unforgettable experiences.`,
      am: `የውስጥ ማስጌጥ አገልግሎታችን ዝግጅቶችዎን ወደማይረሱ ገጠመኞች ለመቀየር የባለሙያ ዲዛይን ያቀርባል።`
    }
  },
  {
    title: {
      en: 'Sauna Bath & Massage',
      am: 'ሳውና እና ማሳጅ'
    },
    image: SpaImg,
    description: {
      en: `We offer professional sauna and massage services to help you relax and rejuvenate. Advance booking is recommended.`,
      am: `ዘና ለማለት እና ለማደስ የሚረዱዎትን የሳውና እና የማሳጅ አገልግሎቶችን እናቀርባለን። በቅድሚያ ቦታ ማስያዝ ይመከራል።`
    }
  },
  {
    title: {
      en: 'Barber Shop',
      am: 'የጸጉር ቤት'
    },
    image: BarberImg,
    description: {
      en: `Our on-site Barber Shop provides expert grooming services in a modern, comfortable setting. Appointments and walk-ins are welcome.`,
      am: `በግቢያችን ውስጥ የሚገኘው የጸጉር ቤታችን በዘመናዊ እና ምቹ ሁኔታ ውስጥ የባለሙያ የውበት አገልግሎቶችን ይሰጣል። ቀጠሮ ወይም በቀጥታ መግባት ይችላሉ።`
    }
  }
];

const PartnerServicesPage = ({ language }) => {
  const renderServiceCard = (service, index) => (
    <div key={index} className="col-md-6 col-lg-4 mb-5 d-flex align-items-stretch">
      <div className="partner-service-card">
        <div className="card-img-container">
          <img
            src={service.image}
            alt={language === 'am' ? service.title.am : service.title.en}
            className="card-img-top"
          />
          <div className="card-img-overlay">
            <h5 className="card-title-overlay">{language === 'am' ? service.title.am : service.title.en}</h5>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{language === 'am' ? service.description.am : service.description.en}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="partner-services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="partner-services-title">{language === 'am' ? 'የአጋር አገልግሎቶች በኪራይ' : 'Partner Services by Rent'}</h1>
          <p className="lead text-muted partner-services-subtitle">{language === 'am' ? 'በአጋሮቻችን የሚሰጡ ተጨማሪ አገልግሎቶች።' : 'Discover premium services offered by our trusted partners, available for rent to enhance your club experience.'}</p>
        </div>
        <div className="row justify-content-center">
          {partnerServices.map(renderServiceCard)}
        </div>
      </div>
    </section>
  );
};

export default PartnerServicesPage;
