import React from 'react';

const GymOverview = ({ language }) => {
  return (
    <section className="container py-5">
     <h2 className="fw-bold mb-4">
  {language === 'am' ? 'አጠቃላይ እይታ' : 'Overview'}
</h2>

<p>
  {language === 'am'
    ? 'ጂም ማዕከላቸነ በዘመናዊ ማሽኖች ለካርዲዮ ፣ ለጥንካሬ ስልጠና የተዘጋጀ ቦታዎች አሉት። ለሁሉም ደረጃዎች የአካል ብቃት ግቦች ለመድረስ በሚረዱ የሰለጠኑ ባለሞያዎች ድጋፍ የሚያደርጉበት ቦታ አዘጋጅተናል።'
    : 'Our Gym Center is fully outfitted with cutting-edge machines and dedicated areas for cardio, strength, and flexibility training. It caters to fitness enthusiasts of all levels, with guidance from certified professional trainers.'}
</p>

<p>
  {language === 'am'
    ? 'እንግዶች ንፁህ፣ የተደራጁ ቦታዎችን ከወንድ እና ከሴት የተለዩ ሻወሪዎች፣ ትኩስ እና ቀዝቃዛ ውሃ እና ደህንነቱ የተጠበቀ ሎከሮች ይኖራቸዋል። ጅማቸን ስልጠናዎትን የሚያስቀጥል ጂም ማዕከል ለእርስዎ የሚመች አካባቢን ያቀርባል።'
    : 'Guests can appreciate a clean and well-organized environment, featuring gender-separated showers, access to hot and cold water, and secure lockers. Whether you’re beginning your fitness journey or maintaining a routine, our Gym Center provides the perfect atmosphere to meet your needsThe Officers Club boasts stunning garden grounds that remain vibrant and lush throughout the year, providing a picturesque backdrop for outdoor events. With the capacity to accommodate 6,000 to 10,000 guests, this venue is ideal for weddings, concerts, and festivals.'}
</p>

<h4 className="mt-4">
  {language === 'am' ? 'መሳሪያዎች' : 'Facilities'}
</h4>

<div className="table-responsive">
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
