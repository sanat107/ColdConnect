import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './pdf.css';

const GeneratePdf = ({ formData }) => {
  const [jobData, setJobData] = useState([]);

  const predefinedString = formData.profession;
  const words = predefinedString.split(' ');

  const handleGetJobs = async () => {
    try {
      for (let a = 0; a < words.length; a++) {
        const apiUrl = `https://api.adzuna.com/v1/api/jobs/in/top_companies?app_id=5df7031f&app_key=f51751d2a4fc33f0fdb33d15f671f4d9&what=${words[a]}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const data = await response.json();

        // Process the data
        var b = data.leaderboard.length;
        if (b === 0) {
          console.log(`No Companies related to skill/preference ${words[a]} found.`);
        } else {
          const suggestedCompanies = data.leaderboard.map(item => item.canonical_name);
          console.log(suggestedCompanies);
          setJobData(prevData => [...prevData, ...suggestedCompanies]);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generateAndDownloadPDF = async () => {
    const pdf = new jsPDF();

    // Get the content element that you want to convert to PDF
    const contentElement = document.getElementById('pdf-content');

    // Convert the content element to a canvas
    const canvas = await html2canvas(contentElement);

    // Convert the canvas to an image data URL
    const imgData = canvas.toDataURL('image/jpeg');

    // Add the image data URL to the PDF document
    pdf.addImage(imgData, 'JPEG', 10, 10, 190, 0);

    // Save the PDF file
    pdf.save('my-pdf-document.pdf');
  };

  return (
    <div>
      <button onClick={generateAndDownloadPDF} className='downloadpdf'>Download PDF</button>
      <button onClick={handleGetJobs} className='getjobs'>Get jobs</button>
      <div id="pdf-content">
        <div className="resume-container">
          {/* Render other content */}
          <div className="personal-info">
          <h2>{formData.name}</h2>
          <h4>{formData.profession}</h4>
          <div className="column">
            <p>
              <h4>Phone </h4>
              {formData.phone}
            </p>
            <p>
              <h4>Email </h4>
              {formData.email}
            </p>
            <p>
              <h4>Country </h4>
              {formData.country}
            </p>
          </div>
          <div className="column">
            <h2>Employment Information</h2>
            <p>
              <h4>Job Title </h4>
              {formData.jobTitle}
            </p>
            <p>
              <h4>Job Location: </h4>
              {formData.jobplace}
            </p>
            <p>
              <h4>Start Date </h4>
              {formData.startDate}
            </p>
            <p>
              <h4>End Date </h4>
              {formData.endDate}
            </p>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="education">
          <h2>Educational Details</h2>
          {/* Render educational details here */}
        </div>
      </div>
    </div>
      <div className="job-list">
        <h2>Job List</h2>
        <ul>
          {jobData.map((company, index) => (
            <li key={index}>{company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneratePdf;
