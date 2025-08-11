import React from 'react';

const services = [
  {en: "Children's playground", am: "የህፃናት መጫወቻ"},
  {en: "Parking", am: "መኪና ማቆሚያ"},
  {en: "Laundry", am: "ልብስ ማጠቢያ"},
  {en: "VIP Restaurant and Bar", am: "(VIP) ምግብ ቤት እና ባር"},
  {en: "Sauna Bath & Massage (Partner Service)", am: "ሳውና እና ማሳጅ (በአጋር የሚሰጥ አገልግሎት)"},
  {en: "Outdoor Catering", am: "ውጪ ምግብ አቅራቢ"},
  {en: "DSTV and WiFi Internet", am: "ዲኤስቲቪ እና ዋይፋይ ኢንተርኔት"},
  {en: "Traditional Ethiopian Coffee Ceremony", am: "የባህላዊ የቡና ስነስርዓት"}
];

const OtherServices = ({ language }) => (
  <section className="py-5 bg-light" data-aos="fade-up">
    <div className="container">
<h2 className="fw-bold mb-4">
  {language === 'am' ? 'ሌሎች የሚገኙ አገልግሎቶች' : 'Other Available Services'}
</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 mb-2">
            <span>✅ {service[language]}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OtherServices;
