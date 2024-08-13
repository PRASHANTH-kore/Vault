import React, { useState } from 'react';
// import FileItem from './FileItem';
import { IoIosArrowForward } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";

function FileSection({ title, files, onFileSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log('ddd')

  return (
    <div className="file-section">

      <h3 onClick={toggleDropdown} className="file-section-title">
         <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}><IoIosArrowForward /></span>{title}
      </h3>
      {isOpen && (
        <div className="file-items">
          {/* {files.map((file, index) => (
            <FileItem key={index} name={file.name} pages={file.pages} onFileSelect={() => onFileSelect(file)} />
          ))} */}

       <div className="file-item">
        <input
          type="radio"
          className="file-item-radio"
        //   checked={isSelected}
        //   onChange={isSelected}
        />
        <div className="file-item-icon"><FaRegFileAlt /></div>
        <div className="file-item-content" onClick={() => onFileSelect({name:'File Name 1'})}>
          <p className="file-item-name">File Name 1</p>
          <small className="file-item-pages">50 pages</small>
        </div>
      </div>

      <div className="file-item">
        <input
          type="radio"
          className="file-item-radio"
        //   checked={isSelected}
        //   onChange={isSelected}
        />
        <div className="file-item-icon"><FaRegFileAlt /></div>
        <div className="file-item-content" onClick={() => onFileSelect({name:'File Name 2'})}>
          <p className="file-item-name">File Name 2</p>
          <small className="file-item-pages">2 sheets</small>
        </div>
      </div>

      <div className="file-item">
        <input
          type="radio"
          className="file-item-radio"
        //   checked={isSelected}
        //   onChange={isSelected}
        />
        <div className="file-item-icon"><FaRegFileAlt /></div>
        <div className="file-item-content" onClick={() => onFileSelect({name:'File Name 3'})}>
          <p className="file-item-name">File Name 3</p>
          <small className="file-item-pages">23 sheets</small>
        </div>
      </div>
        </div>
      )}
    </div>
  );
}

export default FileSection;