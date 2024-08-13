// src/Tab.js
import React from 'react';
import './App.css'; // Make sure to import the CSS file here

const Tab = ({ label, onClick, isActive }) => {
  return (
    <>
    <li
      className={`tab-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </li>
    </>
  );
};

export default Tab;
