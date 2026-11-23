import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceVideoSection = ({ serviceTitle, language }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/services`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          // Find matching service by title
          const match = res.data.find(s => s.title.trim().toLowerCase() === serviceTitle.trim().toLowerCase());
          if (match && match.videos) {
            setVideos(match.videos);
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching service videos:', err);
      });
  }, [serviceTitle]);

  if (videos.length === 0) return null;

  return (
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="fw-bold mb-4">
          {language === 'en' ? 'Related Videos' : 'ተዛማጅ ቪዲዮዎች'}
        </h2>
        <div className="row g-4">
          {videos.map((v) => (
            <div key={v.id} className={videos.length === 1 ? 'col-12' : 'col-md-6'}>
              <div className="shadow-sm rounded-4 overflow-hidden bg-black" style={{ height: 'auto' }}>
                <video
                  src={`${process.env.REACT_APP_API_URL}/uploads/${v.filename}`}
                  controls
                  className="w-100 d-block"
                  style={{ maxHeight: '500px' }}
                  preload="metadata"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceVideoSection;
