// src/Tabs.js
import React, { useState } from 'react';
import Tab from './Tab';
import './App.css'; // Ensure CSS is imported in the component that uses the styles

const Tabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <ul className="tab-header">
        {tabData.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            isActive={tab.label === activeTab}
            onClick={() => handleTabClick(tab.label)}
          />
        ))}
      
      </ul>
     
      <div className="tab-content">
        {tabData.map(
          (tab) =>
            tab.label === activeTab && (
              <div key={tab.label}>{tab.content}</div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
