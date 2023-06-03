import React, { useState } from 'react';
import Stepone from './Stepone';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import Stepfour from './Stepfour';
import GeneratePdf from './GeneratePdf';
import './resume.css';

const GenerateResume = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    profession: "",
    jobTitle: "",
    employer: "",
    jobplace: "",
    startDate: "",
    endDate: "",
    school: "",
    schoolArea: "",
    schoolStart: "",
    schoolEnd: "",
    undergradclg: "",
    undergradArea: "",
    undergradStart: "",
    undergradEnd: "",
    postgradclg: "",
    postgradArea: "",
    postgradStart: "",
    postgradEnd: "",

    skills: []
  })

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => { 
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const PageDisplay = () =>{
    if (currentPage === 1){
      return <Stepone formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 2){
      return <StepTwo formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 3){
      return <StepThree formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 4){
      return <Stepfour formData={formData} setFormData={setFormData} />;
    }
    if(currentPage === 5){
      return <GeneratePdf formData={formData} setFormData={setFormData} />
    }
  } 
  return (
    <div>
    <h2 className='mainheadingresume' >Create Your Resume</h2>
    <div>{PageDisplay()}</div>

    <button className='prev-btn' onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous
    </button>
    <button className='next-btn' onClick={handleNextPage} disabled={currentPage === 5}>
      Next
    </button>
  </div>
  )
}

export default GenerateResume