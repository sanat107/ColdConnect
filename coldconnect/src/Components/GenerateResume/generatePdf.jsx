import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './resume.css';


const GeneratePdf = ({ formData }) => {

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
      <button onClick={generateAndDownloadPDF}>Download PDF</button>
      <div id='pdf-content'>
      <div className="resume-container">
      <div className="personal-info">
        <h2>Personal Information</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Country: {formData.country}</p>
      </div>
      <div className="employment-info">
        <h2>Employment Information</h2>
        <p>Employer: {formData.employer}</p>
        <p>Job Title: {formData.jobTitle}</p>
        <p>Job Location: {formData.jobplace}</p>
        <p>Start Date: {formData.startDate}</p>
        <p>End Date: {formData.endDate}</p>
      </div>
      <div className="skills">
      <ul>Skills
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default GeneratePdf;
