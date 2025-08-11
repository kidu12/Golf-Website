import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import ConferenceHall from './pages/ConferenceHall';
import ContactPage from './pages/ContactPage';
import NewsEventsPage from './pages/NewsEventsPage';
import BarRestaurant from './pages/BarRestaurant';
import SpaSteamCenter from './pages/SpaSteamCenter';
import GymCenter from './pages/GymCenter';
import GardenGrounds from './pages/GardenGrounds';
import TennisCourt from './pages/TennisCourt';
import OtherServicesDetail from './pages/OtherServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Membership from './pages/Membership';
import JuiceBar from './pages/JuiceBar';
import ChildrensPlayground from './pages/ChildrensPlayground';
import CarWash from './pages/CarWash';
import CoffeeCeremony from './pages/CoffeeCeremony';
import CateringService from './pages/CateringService';
import ExhibitionsAndBazaars from './pages/ExhibitionsAndBazaars';

// Admin

import Dashboard from './admin/Dashboard';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminLogin from './admin/AdminLogin';

const App = () => {
  const [language, setLanguage] = useState(null); // Initially null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(storedLang);
    setLoading(false); // Done loading
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'am' ? 'en' : 'am';
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  const isAdminPath = window.location.pathname.startsWith('/admin');

  if (loading) return null; // Don't render anything until language is ready

  

  return (
    <Router>
      <ScrollToTop />
      {!isAdminPath && <Header language={language} onLanguageChange={toggleLanguage} />}
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<ContactPage language={language} />} />
        <Route path="/conference" element={<ConferenceHall language={language} />} />
        <Route path="/news-events" element={<NewsEventsPage language={language} />} />
        <Route path="/bar" element={<BarRestaurant language={language} />} />
        <Route path="/spa" element={<SpaSteamCenter language={language} />} />
        <Route path="/gym" element={<GymCenter language={language} />} />
        <Route path="/garden" element={<GardenGrounds language={language} />} />
        <Route path="/tennis" element={<TennisCourt language={language} />} />
        <Route path="/other-services" element={<OtherServicesDetail language={language} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
              <Route path="/membership" element={<Membership language={language} />} />
        <Route path="/juice-bar" element={<JuiceBar language={language} />} />
        <Route path="/childrens-playground" element={<ChildrensPlayground language={language} />} />
        <Route path="/car-wash" element={<CarWash language={language} />} />
        <Route path="/coffee-ceremony" element={<CoffeeCeremony language={language} />} />
        <Route path="/catering-service" element={<CateringService language={language} />} />
        <Route path="/services/exhibitions-and-bazaars" element={<ExhibitionsAndBazaars language={language} />} />
        <Route path="/admin-login" element={<AdminLogin />} />
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
