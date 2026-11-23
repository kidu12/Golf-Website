import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ✅ Make sure this exists
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BarRestaurant from './pages/BarRestaurant';
import CarWash from './pages/CarWash';
import CateringService from './pages/CateringService';
import ChildrensPlayground from './pages/ChildrensPlayground';
import CoffeeCeremony from './pages/CoffeeCeremony';
import ConferenceHall from './pages/ConferenceHall';
import ExhibitionsAndBazaars from './pages/ExhibitionsAndBazaars';
import GardenGrounds from './pages/GardenGrounds';
import GymCenter from './pages/GymCenter';
import JuiceBar from './pages/JuiceBar';
import OtherServices from './pages/OtherServices';
import RoomService from './pages/RoomService';
import TennisCourt from './pages/TennisCourt';

// Admin
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminLogin from './admin/AdminLogin';

const App = () => {
  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(storedLang);
    setLoading(false);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'am' ? 'en' : 'am';
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  const isAdminPath = window.location.pathname.startsWith('/admin');

  if (loading) return null;

  return (
    <Router>
      <ScrollToTop />
      {!isAdminPath && <Header language={language} onLanguageChange={toggleLanguage} />}
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/membership" element={<Membership language={language} />} />
        <Route path="/news-events" element={<NewsEventsPage language={language} />} />
        <Route path="/contact" element={<ContactPage language={language} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
        <Route path="/services/bar-restaurant" element={<BarRestaurant language={language} />} />
        <Route path="/services/car-wash" element={<CarWash language={language} />} />
        <Route path="/services/catering" element={<CateringService language={language} />} />
        <Route path="/services/childrens-playground" element={<ChildrensPlayground language={language} />} />
        <Route path="/services/coffee-ceremony" element={<CoffeeCeremony language={language} />} />
        <Route path="/services/conference-hall" element={<ConferenceHall language={language} />} />
        <Route path="/services/exhibitions-bazaars" element={<ExhibitionsAndBazaars language={language} />} />
        <Route path="/services/garden-grounds" element={<GardenGrounds language={language} />} />
        <Route path="/services/gym-center" element={<GymCenter language={language} />} />
        <Route path="/services/juice-bar" element={<JuiceBar language={language} />} />
        <Route path="/services/other-services" element={<OtherServices language={language} />} />
        <Route path="/services/spa-steam-center" element={<RoomService language={language} />} />
        <Route path="/services/tennis-court" element={<TennisCourt language={language} />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin-login" element={<Navigate to="/admin/login" replace />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAdminPath && <Footer language={language} />}
    </Router>
  );
};

export default App;
