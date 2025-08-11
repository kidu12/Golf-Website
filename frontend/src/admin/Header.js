import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="mb-0">🛡️ Admin Dashboard</h2>
      <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>
        🔒 Logout
      </button>
    </header>
  );
};

export default Header;
