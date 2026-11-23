
import React, { useEffect, useState } from 'react';
import '../styles/hero.css';
// import logo from '../assets/images/logo.webp';
import axios from 'axios';

const Hero = ({ language }) => {
  const [activePosts, setActivePosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivePosts();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (activePosts.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === activePosts.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [activePosts.length]);

  const fetchActivePosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/hero-post/active`);
      
     
      if (Array.isArray(res.data)) {
        setActivePosts(res.data);
      } else {
        setActivePosts([]);
      }
    } catch (error) {
      console.error('Error fetching active posts:', error);
      setError('Failed to load hero content');
      setActivePosts([]);
    } finally {
      setLoading(false);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === activePosts.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? activePosts.length - 1 : currentIndex - 1);
  };

  // Don't show anything if loading or no active posts
  if (loading) {
    return (
      <section className="hero-single d-flex align-items-center justify-content-center text-white text-center">
        <div className="overlay"></div>
        <div className="content">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  // Return null if no active posts - hero section won't appear at all
  if (activePosts.length === 0) {
    return null; // This will hide the entire hero section
  }

  const currentPost = activePosts[currentIndex];

  return (
    <section className="hero-single">
      {/* Background Image with Overlay */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/uploads/${currentPost.image})`
        }}
      >
        <div className="overlay"></div>
      </div>

      {/* Navigation Arrows - Only show if multiple posts */}
      {activePosts.length > 1 && (
        <>
          <button className="hero-arrow hero-arrow-prev" onClick={goToPrev}>
            ‹
          </button>
          <button className="hero-arrow hero-arrow-next" onClick={goToNext}>
            ›
          </button>
        </>
      )}

      {/* Hero Content - Updated to match screenshot_12 styling */}
<div className="hero-content d-flex align-items-center justify-content-center text-white">
  <div className="container">
    {/* Hero Text - Clean layout like screenshot_12 */}
    <div className="hero-text-content">
      <h1 className="hero-title" style={{
        fontSize: '2.1rem',
        lineHeight: '1.5',
        textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
        maxWidth: '1000px',
        margin: '0 auto',
        fontWeight: '500',
        textAlign: 'center',
        whiteSpace: 'pre-line',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        color: 'white',
        marginBottom: '1rem'
      }}>
        {currentPost.description}
      </h1>
      <p className="hero-author" style={{
        opacity: '0.9',
        textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
        fontSize: '1.3rem',
        fontStyle: 'normal',
        marginTop: '1rem',
        textAlign: 'center',
        fontWeight: '500',
        color: 'white',
        lineHeight: '1.4'
      }}>
        {currentPost.author}
      </p>
    </div>

    {/* Slide Indicators - Only show if multiple posts */}
    {activePosts.length > 1 && (
      <div className="hero-indicators-bottom">
        {activePosts.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    )}
  </div>
</div>
    </section>
  );
};

export default Hero;