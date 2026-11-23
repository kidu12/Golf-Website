import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

/**
 * ServiceVideoPlayer – Displays uploaded videos for a specific service on public pages.
 * Usage: <ServiceVideoPlayer serviceKey="juice-bar" />
 */
const ServiceVideoPlayer = ({ serviceKey }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!serviceKey) return;

    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${API}/api/videos/service/${serviceKey}`);
        setVideos(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error('Error loading service videos:', err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [serviceKey]);

  if (loading || videos.length === 0) return null;

  return (
    <section
      aria-label="Service promotional videos"
      style={{
        width: '100%',
        maxWidth: '960px',
        margin: '2.5rem auto',
        padding: '0 1rem',
      }}
    >
      {videos.map((video) => (
        <div
          key={video.id}
          style={{
            position: 'relative',
            paddingTop: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            marginBottom: videos.length > 1 ? '1.5rem' : 0,
            background: '#000',
          }}
        >
          <video
            controls
            preload="metadata"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          >
            <source src={`${API}/uploads/${video.filename}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </section>
  );
};

export default ServiceVideoPlayer;
