import React from 'react';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = ({ language }) => {
  return (
    <div>
      <PrivacyPolicyContent language={language} />
    </div>
  );
};

export default PrivacyPolicy;
