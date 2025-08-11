import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import NewsEventManager from './AdminNewsEvents';
import ContactManager from './AdminContactMessages';
import TestimonialManager from './AdminTestimonials';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
/>

const Dashboard = () => {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/admin-login');
};
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4 bg-light min-vh-100">
<Header onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="news-events" />} />
          <Route path="news-events" element={<NewsEventManager />} />
          <Route path="contacts" element={<ContactManager />} />
          <Route path="testimonials" element={<TestimonialManager />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
