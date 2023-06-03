import React, { useState } from 'react';
import Stepone from './Stepone';
import Steptwo from './stepTwo';
import Stepthree from './stepThree';
import Stepfour from './StepFour';
import GeneratePdf from './GeneratePdf';


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
      return <Steptwo formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 3){
      return <Stepthree formData={formData} setFormData={setFormData} />;
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
    <h2>Create Your Resume</h2>
    <div>{PageDisplay()}</div>

    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous
    </button>
    <button onClick={handleNextPage} disabled={currentPage === 5}>
      Next
    </button>
  </div>
  )
}

export default GenerateResume;