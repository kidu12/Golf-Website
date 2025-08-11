import React from 'react';
import { Link } from 'react-router-dom';


const MembershipContent = ({ language }) => {
  const content = {
    en: {
      title: 'Addis Ababa Golf Club Membership',
      formTitle: 'Membership Application Form – Addis Ababa Golf Club',
      rulesTitle: 'Membership Details & Rules',
      rules: [
        'The duration of membership will be anytime starting from the issued date up to the end of the duration, based on membership interest.',
        'Each member will get the service to which they paid for, in accordance with the daily guest policies of the Club.',
        'Members and other users of the golf course must abide by the rules and regulations issued by the Club\'s sport commission.',
        'The Club\'s pro has the sole authority to grant a member\'s ability to play on the course and to decide on the opening or closing of the golf course.',
        'Members who wish to register their children (ages 13-18) may do so by paying an additional 3000.00 ETB for each child.',
      ],
      feesTitle: 'Membership Packages & Fees',
      fees: [
        { name: 'Individual Membership (3 Months)', price: 'USD 550.00' },
        { name: 'Individual Membership (6 Months)', price: 'USD 800.00' },
        { name: 'Individual Membership (1 Year)', price: 'USD 1,200.00' },
        { name: 'Couple Membership (1 Year)', price: 'USD 1,800.00' },

      ],
      taxInfo: 'All the above prices are inclusive of 10% service charge and 15% VAT.',
      formFields: {
        name: 'Name of Member',
        address: 'Address',
        telOff: 'Tel (Office)',
        telRes: 'Tel (Residence)',
      },
      contactTitle: 'Inquire About Membership',
      contactText: 'For more details or to sign up, please visit our administration office or get in touch with our team.',
      contactButton: 'Contact Us',
    },
    am: {
      title: 'የአዲስ አበባ ጎልፍ ክለብ አባልነት',
      formTitle: 'የአባልነት ቅጽ ለ2024 ዓ.ም',
      rulesTitle: 'የአባልነት ዝርዝሮች እና ህጎች',
      rules: [
        'የአባልነት ጊዜው የሚጀምረው ከተሰጠበት ቀን ጀምሮ እስከሚጠናቀቅበት ጊዜ ድረስ ሲሆን, በአባልነት ፍላጎት ላይ የተመሰረተ ነው።',
        'እያንዳንዱ አባል በክለቡ የዕለት እንግዳ ፖሊሲዎች መሰረት የከፈለበትን አገልግሎት ያገኛል።',
        'አባላት እና ሌሎች የጎልፍ መጫወቻ ተጠቃሚዎች በክለቡ ስፖርት ኮሚሽን የወጡትን ህጎች እና መመሪያዎች ማክበር አለባቸው።',
        'የክለቡ ፕሮፌሽናል ብቻ የአንድን አባል በጎልፍ መጫወቻ ላይ የመጫወት ችሎታን የመፍቀድ እና የጎልፍ መጫወቻውን መክፈት ወይም መዝጋት የመወሰን ስልጣን አለው።',
        'ልጆቻቸውን (ከ13-18 አመት) ማስመዝገብ የሚፈልጉ አባላት ለእያንዳንዱ ልጅ ተጨማሪ 3000.00 ብር በመክፈል ይህን ማድረግ ይችላሉ።',
      ],
      feesTitle: 'የአባልነት ፓኬጆች እና ክፍያዎች',
      fees: [
        { name: 'የአንድ ሰው አባልነት (3 ወራት)', price: 'USD 550.00' },
        { name: 'የአንድ ሰው አባልነት (6 ወራት)', price: 'USD 800.00' },
        { name: 'የአንድ ሰው አባልነት (1 ዓመት)', price: 'USD 1,200.00' },
        { name: 'የጥንዶች አባልነት (1 ዓመት)', price: 'USD 1,800.00' },

      ],
      taxInfo: 'ከላይ የተጠቀሱት ዋጋዎች በሙሉ 10% የአገልግሎት ክፍያ እና 15% ተጨማሪ እሴት ታክስን ያካትታሉ።',
      formFields: {
        name: 'የአባል ስም',
        address: 'አድራሻ',
        telOff: 'ስልክ (ቢሮ)',
        telRes: 'ስልክ (መኖሪያ)',
      },
      contactTitle: 'ስለ አባልነት ይጠይቁ',
      contactText: 'ለተጨማሪ ዝርዝሮች ወይም ለመመዝገብ, እባክዎ አስተዳደር ቢሮአችንን ይጎብኙ ወይም ቡድናችንን ያግኙ።',
      contactButton: 'ያግኙን',
    },
  };

  const selected = content[language] || content.en;

  return (
    <div className='membership-page'>
      <header className='membership-hero'>
        <div className='hero-content'>
          <h1 className='hero-title text-white'>{selected.title}</h1>
          <p className='hero-subtitle'>{selected.formTitle}</p>
        </div>
      </header>

      <section className='membership-rules-section py-5'>
        <div className='container'>
          <h2 className='text-center fw-bold mb-4'>{selected.rulesTitle}</h2>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <ul className='list-group list-group-flush'>
                {selected.rules.map((rule, index) => (
                  <li key={index} className='list-group-item'>
                    <i className='fas fa-check-circle text-success me-2'></i>{rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='membership-fees-section py-5 bg-light'>
        <div className='container'>
          <h2 className='text-center fw-bold mb-5'>{selected.feesTitle}</h2>
          <div className='row'>
            {selected.fees.map((fee, index) => (
              <div key={index} className='col-md-6 col-lg-3 mb-4'>
                <div className='fee-card text-center p-4 h-100'>
                  <h5 className='fee-name'>{fee.name}</h5>
                  <p className='fee-price display-6 fw-bold'>{fee.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className='text-center mt-4 text-muted'>{selected.taxInfo}</p>
        </div>
      </section>

      <section className='membership-contact-section py-5 bg-light'>
        <div className='container text-center'>
          <h2 className='fw-bold'>{selected.contactTitle}</h2>
          <p className='lead my-4'>{selected.contactText}</p>
          <Link to='/contact' className='btn btn-primary btn-lg'>
            {selected.contactButton}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MembershipContent;
