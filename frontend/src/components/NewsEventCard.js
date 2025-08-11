import React, { useState } from 'react';

// Utility to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NewsEventCard = ({ title, type, shortDesc, detailedDesc, image, date }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <span className={`badge ${type === 'Event' ? 'bg-success' : 'bg-primary'} mb-2`}>
          {type}
        </span>
        <small className="text-muted mb-2">{formatDate(date)}</small>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text" style={{ fontSize: '0.95rem' }}>
          {showMore ? `${shortDesc} ${detailedDesc}` : shortDesc}
        </p>
        <span
          className="text-primary mt-auto"
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Read More'}
        </span>
      </div>
    </div>
  );
};

export default NewsEventCard;
