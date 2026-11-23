// // import React, { useState } from 'react';

// // // Utility to format date
// // const formatDate = (dateString) => {
// //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
// //   return new Date(dateString).toLocaleDateString(undefined, options);
// // };

// // const NewsEventCard = ({ title, type, shortDesc, detailedDesc, image, video, date }) => {
// //   const [showMore, setShowMore] = useState(false);

// //   return (
// //     <div className="card h-100 shadow-sm">
// //        <div className="media-container">
// //         {image && !image.endsWith("null") && (
// //           <img
// //             src={`${image}`}
// //             alt={title}
// //             className="card-img-top mb-2"
// //             style={{ height: '200px', objectFit: 'cover', borderRadius: '6px' }}
// //           />
// //         )}

// //         {video && isVideo(video) && (
// //           <video
// //             controls
// //             width="100%"
// //             height="200"
// //             style={{ objectFit: 'cover', borderRadius: '6px' }}
// //             className={image ? 'mt-2' : ''}
// //           >
// //             <source
// //               src={`${video}`}
// //               type="video/mp4"
// //             />
// //             Your browser does not support the video tag.
// //           </video>
// //         )}

// //         {/* If neither image nor video */}
// //         {!image && !video && (
// //           <div
// //             className="d-flex justify-content-center align-items-center bg-light text-muted"
// //             style={{ height: '200px', borderRadius: '6px' }}
// //           >
// //             No Media
// //           </div>
// //         )}
// //       </div>
// //       <div className="card-body d-flex flex-column">
// //         <span className={`badge ${type === 'Event' ? 'bg-success' : 'bg-primary'} mb-2`}>
// //           {type}
// //         </span>
// //         <small className="text-muted mb-2">{formatDate(date)}</small>
// //         <h5 className="card-title fw-bold">{title}</h5>
// //         <p className="card-text" style={{ fontSize: '0.95rem' }}>
// //           {showMore ? `${shortDesc} ${detailedDesc}` : shortDesc}
// //         </p>
// //         <span
// //           className="text-primary mt-auto"
// //           style={{ cursor: 'pointer', fontWeight: 'bold' }}
// //           onClick={() => setShowMore(!showMore)}
// //         >
// //           {showMore ? 'Show Less' : 'Read More'}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewsEventCard;


// import React, { useState } from 'react';

// // Utility to format date
// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const NewsEventCard = ({ title, type, shortDesc, detailedDesc, image, video, date, link }) => {
//   const [showMore, setShowMore] = useState(false);

//   const isVideo = (filename) => {
//     if (!filename) return false;
//     const ext = filename.split('.').pop().toLowerCase();
//     return ['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext);
//   };

//   return (
//     <div className="card h-100 shadow-sm">
//       {/* ✅ Media Section */}
//       <div className="media-container">
//         {image && !image.endsWith("null") && (
//           <img
//             src={`${image}`}
//             alt={title}
//             className="card-img-top mb-2"
//             style={{ height: '200px', objectFit: 'cover', borderRadius: '6px' }}
//           />
//         )}

//         {video && isVideo(video) && (
//           <video
//             controls
//             width="100%"
//             height="200"
//             style={{ objectFit: 'cover', borderRadius: '6px' }}
//             className={image ? 'mt-2' : ''}
//           >
//             <source src={`${video}`} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}

//         {!image && !video && (
//           <div
//             className="d-flex justify-content-center align-items-center bg-light text-muted"
//             style={{ height: '200px', borderRadius: '6px' }}
//           >
//             No Media
//           </div>
//         )}
//       </div>

//       {/* ✅ Card Content */}
//       <div className="card-body d-flex flex-column">
//         <span className="badge bg-success mb-2">{type}</span>
//         <small className="text-muted mb-2">{formatDate(date)}</small>

//         <h5 className="card-title fw-bold">{title}</h5>

//         <p className="card-text" style={{ fontSize: '0.95rem' }}>
//           {showMore ? `${shortDesc} ${detailedDesc}` : shortDesc}
//         </p>

//         {/* ✅ Show external link exactly as entered */}
//         {link && (
//           <div className="mt-2">
//             <small style={{ wordBreak: 'break-all' }}>
//               🔗 <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
//             </small>
//           </div>
//         )}

//         {/* ✅ Read More Toggle */}
//         <span
//           className="text-primary mt-auto"
//           style={{ cursor: 'pointer', fontWeight: 'bold' }}
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? 'Show Less' : 'Read More'}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default NewsEventCard;


import React, { useState } from 'react';

// Utility to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NewsEventCard = ({ title, type, shortDesc, detailedDesc, image, video, date, link, links }) => {
  const [showMore, setShowMore] = useState(false);

  const isVideo = (filename) => {
    if (!filename) return false;
    const ext = filename.split('.').pop().toLowerCase();
    return ['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext);
  };

  // Parse links from JSON string or use empty array
  const parsedLinks = React.useMemo(() => {
    if (links) {
      try {
        return JSON.parse(links);
      } catch (err) {
        console.log('Error parsing links:', err);
        return [];
      }
    }
    return [];
  }, [links]);

  // If no parsed links but has single link, convert it
  const displayLinks = parsedLinks.length > 0 ? parsedLinks : 
                      (link ? [{ text: 'External Link', url: link }] : []);

  return (
    <div className="card h-100 shadow-sm">
      {/* ✅ Media Section */}
      <div className="media-container">
        {image && !image.endsWith("null") && (
          <img
            src={`${image}`}
            alt={title}
            className="card-img-top mb-2"
            style={{ height: '200px', objectFit: 'cover', borderRadius: '6px' }}
          />
        )}

        {video && isVideo(video) && (
          <video
            controls
            width="100%"
            height="200"
            style={{ objectFit: 'cover', borderRadius: '6px' }}
            className={image ? 'mt-2' : ''}
          >
            <source src={`${video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {!image && !video && (
          <div
            className="d-flex justify-content-center align-items-center bg-light text-muted"
            style={{ height: '200px', borderRadius: '6px' }}
          >
            No Media
          </div>
        )}
      </div>

      {/* ✅ Card Content */}
      <div className="card-body d-flex flex-column">
        <span className="badge bg-success mb-2">{type}</span>
        <small className="text-muted mb-2">{formatDate(date)}</small>

        <h5 className="card-title fw-bold">{title}</h5>

        <p className="card-text" style={{ fontSize: '0.95rem' }}>
          {showMore ? `${shortDesc} ${detailedDesc}` : shortDesc}
        </p>

        {/* ✅ Show multiple links if available */}
        {displayLinks.length > 0 && (
          <div className="mt-2">
            <small className="fw-bold d-block mb-1">Links:</small>
            <div className="d-flex flex-column gap-1">
              {displayLinks.map((linkItem, index) => (
                <a
                  key={index}
                  href={linkItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none small"
                  style={{ wordBreak: 'break-all' }}
                >
                  🔗 {linkItem.text || 'External Link'}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Show single link if no multiple links (backward compatibility) */}
        {displayLinks.length === 0 && link && (
          <div className="mt-2">
            <small style={{ wordBreak: 'break-all' }}>
              🔗 <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </small>
          </div>
        )}

        {/* ✅ Read More Toggle */}
        {(shortDesc || detailedDesc) && (
          <span
            className="text-primary mt-auto"
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </span>
        )}
      </div>
    </div>
  );
};

export default NewsEventCard;