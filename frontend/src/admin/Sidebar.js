import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px' }}>
    <h5 className="fw-bold">Admin Panel</h5>
    <nav className="nav flex-column mt-4">
      <NavLink to="/admin/news-events" className="nav-link text-white">📰 News & Events</NavLink>
      <NavLink to="/admin/contacts" className="nav-link text-white">📩 Contact Messages</NavLink>
      <NavLink to="/admin/testimonials" className="nav-link text-white">🌟 Testimonials</NavLink>
      <NavLink to="/" className="nav-link text-white mt-3">← Back to Site</NavLink>
    </nav>
  </div>
);

export default Sidebar;
