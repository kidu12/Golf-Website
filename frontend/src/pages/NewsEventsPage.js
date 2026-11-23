// import React, { useEffect, useState } from 'react';
// import NewsEventCard from '../components/NewsEventCard';
// import '../styles/newsEvents.css';
// import axios from 'axios';

// const NewsEvents = ({ language }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchNewsEvents = async () => {
//       try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news-events`);
//         if (Array.isArray(res.data)) {
//           setItems(res.data);
//         } else {
//           console.warn("Expected array, got:", res.data);
//           setItems([]);
//         }
//       } catch (error) {
//         console.error('Failed to fetch news/events:', error);
//         setItems([]);
//       }
//     };

//     fetchNewsEvents();
//   }, []);

//   return (
//     <section className="py-5 bg-light" id="news-events">
//       <div className="container">
//         <h2 className="fw-bold text-center mb-4">
//           {language === 'am' ? 'ዝግጅቶች እና ዜና' : 'Events & News'}
//         </h2>

//      {/* ✅ Combined Section (Newest First) */}
//         <div className="row g-4">
//           {Array.isArray(items) && items.length > 0 ? (
//             items.map((item) => (
//               <div className="col-md-6 col-lg-4" key={item.id}>
//                 <NewsEventCard
//                   {...item}
//                   image={
//                     item.image
//                       ? `${process.env.REACT_APP_API_URL}/uploads/${item.image}`
//                       : null
//                   }
//                   video={
//                     item.video
//                       ? `${process.env.REACT_APP_API_URL}/uploads/${item.video}`
//                       : null
//                   }
//                 />
//               </div>
//             ))
//           ) : (
//             <p className="text-center">
//               {language === 'am' ? 'ምንም ዜና ወይም ዝግጅት አልተገኘም።' : 'No news or events found.'}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsEvents;


import React, { useEffect, useState } from 'react';
import NewsEventCard from '../components/NewsEventCard';
import '../styles/newsEvents.css';
import axios from 'axios';

const NewsEvents = ({ language }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchNewsEvents = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news-events`);
        if (Array.isArray(res.data)) {
          // ✅ Sort by newest first (latest date at the top)
          const sortedItems = res.data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setItems(sortedItems);
        } else {
          console.warn("Expected array, got:", res.data);
          setItems([]);
        }
      } catch (error) {
        console.error('Failed to fetch news/events:', error);
        setItems([]);
      }
    };

    fetchNewsEvents();
  }, []);

  return (
    <section className="py-5 bg-light" id="news-events">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">
          {language === 'am' ? 'ዜና እና ዝግጅቶች' : 'News & Events'}
        </h2>

        {/* ✅ Combined Section (Newest First) */}
        <div className="row g-4">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <NewsEventCard
                  {...item}
                  image={
                    item.image
                      ? `${process.env.REACT_APP_API_URL}/uploads/${item.image}`
                      : null
                  }
                  video={
                    item.video
                      ? `${process.env.REACT_APP_API_URL}/uploads/${item.video}`
                      : null
                  }
                />
              </div>
            ))
          ) : (
            <p className="text-center">
              {language === 'am' ? 'ምንም ዜና ወይም ዝግጅት አልተገኘም።' : 'No news or events found.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;