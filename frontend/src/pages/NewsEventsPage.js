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
          setItems(res.data);
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
          {language === 'am' ? 'ዝግጅቶች እና ዜና' : 'Events & News'}
        </h2>

        {/* EVENTS */}
        <h4 className="mb-3">
          {language === 'am' ? 'የሚመጡ ዝግጅቶች' : 'Upcoming Events'}
        </h4>
        <div className="row g-4">
          {Array.isArray(items) &&
            items
              .filter((item) => item.type === 'Event')
              .map((item) => (
                <div className="col-md-6 col-lg-4" key={item.id}>
                  <NewsEventCard
                    {...item}
                    image={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
                  />
                </div>
              ))}
        </div>

        {/* NEWS */}
        <h4 className="mt-5 mb-3">
          {language === 'am' ? 'የቅርብ ጊዜ ዜና' : 'Latest News'}
        </h4>
        <div className="row g-4">
          {Array.isArray(items) &&
            items
              .filter((item) => item.type === 'News')
              .map((item) => (
                <div className="col-md-6 col-lg-4" key={item.id}>
                  <NewsEventCard
                    {...item}
                    image={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
