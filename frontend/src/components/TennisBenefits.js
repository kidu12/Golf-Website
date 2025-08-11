import React from 'react';

const TennisBenefits = ({ language }) => {
  return (
    <section className="container py-4">
  <h3 className="fw-bold mb-3">
  {language === 'en' 
    ? 'Health Benefits of Ground Tennis' 
    : 'የመሬት ቴኒስ ጤናማ ጠቀሜታዎች'}
</h3>
<ul className="list-group list-group-flush">
  <li className="list-group-item">✅ {language === 'en' ? 'Increases aerobic capacity' : 'የአየር አቅርቦት አቅም ይጨምራል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Lowers resting heart rate and blood pressure' : 'የልብ ምት እና የደም ግፊት ይቀንሳል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Improves metabolic function' : 'የምግብ ምርት አቅም ያሻሽላል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Reduces body fat' : 'ሰውነት ስብ ይቀንሳል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Increases bone density' : 'የአጥንት ጥንካሬ ይጨምራል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Strengthens muscles and tones body' : 'ጡንቻዎችን ያጠነክራል እና ሰውነት ያሳመራል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Decreases risk of heart disease' : 'የልብ በሽታ አደጋ ይቀንሳል'}</li>
  <li className="list-group-item">✅ {language === 'en' ? 'Ideal for people managing diabetes or using insulin' : 'ለስኳር በሽታ ወይም ኢንሱሊን ለሚጠቀሙ ሰዎች ተስማሚ'}</li>
</ul>
    </section>
  );
};

export default TennisBenefits;
