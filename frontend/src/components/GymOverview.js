import React from 'react';

const GymOverview = ({ language }) => {
  return (
    <section className="container my-5">
      <div className="container">
        <h2 className="fw-bold mb-4">
        {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>
          <p>
            {language === 'en'
              ? 'Our state-of-the-art gym at Addis Ababa Golf Club is designed to meet the fitness needs of every guest. It features advanced workout equipment, free weights, and dedicated zones for both cardio and strength training — providing a complete and energizing fitness experience.'
              : 'በስፖርት ሳይንስ  በሰለጠኑ የድርጅታችን ሰራተኞች በመታገዝ በአረንጓዴ የተሸፈነ ማራኪ ተፈጥሮን እየተመለከቱ የተሟላ  ስፓርታዊ እንቅስቃሴ ለማድረግ ምቹ የሆነ የጅም አገልግሎት በተመጣጣኝ ዋጋ መጠቀም ይችላሉ።'}
          </p>
      <br />
          <h3 className="fw-bold mb-4">{language === 'en' ? 'Key Features' : 'ቁልፍ ባህሪዎች'}</h3>
          <table className="table table-bordered mt-3">
    <thead className="table-light">
      <tr>
        <th>{language === 'am' ? 'ዋና መለያዎች' : 'Feature'}</th>
        <th>{language === 'am' ? 'መግለጫ' : 'Description'}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{language === 'am' ? 'መሳሪያዎች' : 'Equipment'}</td>
        <td>{language === 'am' ? 'ዘመናዊ ካርዲዮ እና ጥንካሬ ማሽኖች፣ ነጻ የክብደት መሳሪያዎች' : 'Modern cardio & strength machines, free weights'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ሻወሪዎች' : 'Showers'}</td>
        <td>{language === 'am' ? 'ለወንድ እና ለሴት የተለዩ ሻወሪ ቦታዎች' : 'Separate male and female shower facilities'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ሎከር' : 'Locker'}</td>
        <td>{language === 'am' ? 'የማግኔቲክ ቁልፍ ያለው ደህንነቱ የተጠበቀ ሎከር' : 'Magnetic-lock secure locker access'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'የውሃ አቅርቦት' : 'Water Access'}</td>
        <td>{language === 'am' ? 'ለሁሉም ተጠቃሚዎች ትኩስ እና ቀዝቃዛ ውሃ ይገኛል' : 'Hot and cold water available for all users'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'አሰልጣኞች' : 'Trainers'}</td>
        <td>{language === 'am' ? 'በየቀኑ የሚገኙ የተፈቀዱ የግል አሰልጣኞች' : 'Certified personal trainers available daily'}</td>
      </tr>
    </tbody>
  </table>
      </div>
    </section>
  );
};

export default GymOverview;
