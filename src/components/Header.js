import React from 'react';
import './Header.css'; // We will create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/path-to-logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">Vault</span>
      </div>
      <div className="header-icons">
        <button className="icon-button">
          <i className="fas fa-question-circle"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
