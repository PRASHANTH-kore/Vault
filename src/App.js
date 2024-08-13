import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar onFileSelect={handleFileSelect} />
        <ContentArea selectedFile={selectedFile} />
      </div>
    </div>
  );
}

export default App;
