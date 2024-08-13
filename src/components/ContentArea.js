import React from 'react';

function ContentArea({ selectedFile }) {
  return (
    <div className="content-area">
      {selectedFile ? (
         <div className='bg-container'>
        <>
          <h1>{selectedFile.name}</h1>
          <p>{selectedFile.pages}</p>
        </>
        </div>
      ) : (
        <div className='bg-container'>
        <>
        
          <h1>Welcome to Vault!</h1>
          <p>Use this platform to review pre-read files, powered by Generative AI</p>
          <img src="/path-to-image.png" alt="Illustration" />
          <p>Select a file from the available list to get started</p>
          
        </>
        </div>
      )}
    </div>
  );
}

export default ContentArea;
