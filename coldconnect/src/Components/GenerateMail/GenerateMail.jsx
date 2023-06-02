import Navbar from '../Navbar/Navbar'
import './GenerateMAil.css';
import React, { useState, useRef } from 'react';
import GenerateMailCards from './GenerateMailCards';
import { useNavigate } from 'react-router-dom';

const GenerateMail = () => {
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState('');
  const [apiData, setApiData] = useState(''); // State to store API data
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null); // Ref for the textarea

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();// Extension is singled out and made into lowercase.
      if (fileExtension === 'pdf' || fileExtension === 'doc' || fileExtension === 'docx') {
        previewFile(file);
      } else {
        alert('Invalid file format. Only PDF and Word documents are allowed.');
      }
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const clearFileInput = () => {
    setPreviewSource('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleGenerateMail = () => {
    // Simulated API call
    const apiResponse = 'This is the data from the API'; // Replace with actual API call
    setApiData(apiResponse);

    if (textareaRef.current) {
      textareaRef.current.value = apiResponse;
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <button onClick={handleGoBack}>Go Back</button>
      <div className='maincontainer'>
        <div className='input-1'>
          <span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInputChange}
              ref={fileInputRef}
              id="file-input"
            />
            <label htmlFor="file-input">Choose File</label>
          </span>
          {previewSource && (
            <div>
              <iframe title="Preview" src={previewSource} style={{ width: '100%', height: '500px' }} />
              <button onClick={clearFileInput} className='clear'>Clear</button>
            </div>
          )}
        </div>
        <div className='input-2'>
          <textarea
            className='textarea-input'
            placeholder="Paste or enter text here"
            ref={textareaRef}
          ></textarea>
        </div>
      </div>
      <button className='generate' onClick={handleGenerateMail}>Generate Mail</button>

      <GenerateMailCards/>
    </>
  );
};

export default GenerateMail;
