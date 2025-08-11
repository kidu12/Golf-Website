import React from 'react';
import { FaInfoCircle, FaTasks, FaUserLock, FaSyncAlt, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicyContent = ({ language }) => {
  const translations = {
    en: {
      title: "Privacy Policy",
      p1: "Your privacy is our priority. We are committed to protecting the personal information you share with us. Any data collected through our contact or testimonial forms is used exclusively for its intended purpose—to respond to your inquiries or to share your valuable feedback with the community.",
      p2: "We have implemented robust security measures to safeguard your information from unauthorized access, alteration, or disclosure. We do not sell or share your data with third parties for marketing purposes. Your trust is important to us, and we are dedicated to maintaining the confidentiality and integrity of your personal information."
    },
    am: {
      title: "የግላዊነት ፖሊሲ",
      p1: "የእርስዎ ግላዊነት የእኛ ቅድሚያ የምንሰጠው ጉዳይ ነው። ለእኛ የሚያጋሩትን የግል መረጃ ደህንነቱደህንነቱ የተጠበቀ። በአስታይትአስታይት ወይም በምስክርነት ቅጾቻችን በኩል የተሰበሰበ ማንኛውም መረጃ ለታለመለት ዓላማ ብቻ ወይም ጥቅም ላይ ይውላል።",
    }
  };

  const content = translations[language] || translations.en;

  return (
    <div className="privacy-policy-page">
      <div className="container privacy-policy-container">
        <header className="privacy-policy-header">
          <h1>{content.title}</h1>
        </header>

        <div className="policy-card">
          <div className="policy-card-body">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
