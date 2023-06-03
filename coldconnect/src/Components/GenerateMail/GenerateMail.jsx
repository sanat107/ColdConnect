import Navbar from '../Navbar/Navbar'
import './GenerateMAil.css';
// import React, { useState, useRef } from 'react';
// import GenerateMailCards from './GenerateMailCards';
// import { useNavigate } from 'react-router-dom';
// import { Document, Page, pdfjs } from 'react-pdf';


// const GenerateMail = () => {
//   const navigate = useNavigate();
//   const [previewSource, setPreviewSource] = useState('');
//   const [apiData, setApiData] = useState(''); // State to store API data
//   const [pdfText, setPdfText] = useState(''); // State to store PDF text
//   const fileInputRef = useRef(null);
//   const textareaRef = useRef(null); // Ref for the textarea

//   pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//   const handleFileInputChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const fileExtension = file.name.split('.').pop().toLowerCase(); // Extension is singled out and made into lowercase.
//       if (fileExtension === 'pdf') {
//         const previewURL = URL.createObjectURL(file);
//         setPreviewSource(previewURL);
//         const text = await extractPdfText(file);
//         setPdfText(text);
//       } else {
//         alert('Invalid file format. Only PDF documents are allowed.');
//       }
//     }
//   };

//   const extractPdfText = async (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         const typedarray = new Uint8Array(event.target.result);
//         pdfjs.getDocument(typedarray).promise.then(function (pdf) {
//           pdf.getPage(1).then(function (page) {
//             page.getTextContent().then(function (textContent) {
//               const text = textContent.items.map((item) => item.str).join(' ');
//               resolve(text);
//             });
//           });
//         });
//       };
//       reader.onerror = reject;
//       reader.readAsArrayBuffer(file);
//     });
//   };

//   const clearFileInput = () => {
//     setPreviewSource('');
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleGenerateMail = () => {
//     // Simulated API call
//     const apiResponse = 'This is the data from the API'; // Replace with actual API call
//     setApiData(apiResponse);

//     if (textareaRef.current) {
//       textareaRef.current.value = apiResponse;
//     }
//   };

//   const handleGoBack = () => {
//     navigate('/resumeselect');
//   };

//   return (
//     <>
//     <Navbar/>
//       <button onClick={handleGoBack}>Go Back</button>
//       <div className="maincontainer">
//         <div className="input-1">
//           <span>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={handleFileInputChange}
//               ref={fileInputRef}
//               id="file-input"
//             />
//             <label htmlFor="file-input">Choose File</label>
//           </span>
//           {previewSource && (
//             <div>
//               <iframe title="Preview" src={previewSource} style={{ width: '100%', height: '500px' }} />
//               <button onClick={clearFileInput} className="clear">
//                 Clear
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="input-2">
//           <textarea
//             className="textarea-input"
//             placeholder="Paste or enter text here"
//             ref={textareaRef}
//             value={pdfText}
//             readOnly
//           ></textarea>
//         </div>
//       </div>
//       <button className="generate" onClick={handleGenerateMail}>
//         Generate Mail
//       </button>

//       <GenerateMailCards />
//     </>
//   );
// };

// export default GenerateMail;


import React, { useState, useRef } from 'react';
import GenerateMailCards from './GenerateMailCards';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
// import "./GenerateMail.css";

const GenerateMail = () => {
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState('');
  const [apiData, setApiData] = useState(''); // State to store API data
  const [pdfText, setPdfText] = useState(''); // State to store PDF text
  const [resumeText, setResumeText] = useState(''); // Temporary variable to store resume text
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null); // Ref for the textarea

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase(); // Extension is singled out and made into lowercase.
      if (fileExtension === 'pdf') {
        const previewURL = URL.createObjectURL(file);
        setPreviewSource(previewURL);
        const text = await extractPdfText(file);
        setPdfText(text);
        setResumeText(text); // Store resume text in the temporary variable
      } else {
        alert('Invalid file format. Only PDF documents are allowed.');
      }
    }
  };

  const extractPdfText = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const typedarray = new Uint8Array(event.target.result);
        pdfjs.getDocument(typedarray).promise.then(function (pdf) {
          pdf.getPage(1).then(function (page) {
            page.getTextContent().then(function (textContent) {
              const text = textContent.items.map((item) => item.str).join(' ');
              resolve(text);
            });
          });
        });
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
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
    navigate('/resumeselect');
  };

  return (
    <>
    <Navbar/>
      <button onClick={handleGoBack}>Go Back</button>
      <div className="maincontainer">
        <div className="input-1">
          <span>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileInputChange}
              ref={fileInputRef}
              id="file-input"
            />
            <label htmlFor="file-input">Choose File</label>
          </span>
          {previewSource && (
            <div>
              <iframe title="Preview" src={previewSource} style={{ width: '100%', height: '500px' }} />
              <button onClick={clearFileInput} className="clear">
                Clear
              </button>
            </div>
          )}
        </div>
        <div className="input-2">
          <textarea
            className="textarea-input"
            placeholder="Paste or enter text here"
            ref={textareaRef}
            value={''} // Render the resume text from the temporary variable
            readOnly
          ></textarea>
        </div>
      </div>
      <button className="generate" onClick={handleGenerateMail}>
        Generate Mail
      </button>

      <GenerateMailCards />
    </>
  );
};

export default GenerateMail;
