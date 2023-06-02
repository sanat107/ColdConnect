import React from 'react';
import './resume.css';

const Stepthree = ({formData, setFormData}) => {

  const preview =()=>{
    return(
      <div className='preview'>
          <div>Name: {formData.name} </div>
          <div>email: {formData.email} </div>
          <div>phone:  {formData.phone} </div>
          <div>country: {formData.country} </div>
          <div>profession: {formData.profession} </div>
          <div>Work History
            <div>Job Title: {formData.jobTitle} </div>
            <div>employer: {formData.employer} </div>
            <div>Start date: {formData.start} </div>
            <div>end date : {formData.end} </div>
          </div>
          <div>
            EDUCATION
          </div>
      </div>
    )}

  return (
    <div>
     <h2> Educational Details</h2>
      <div className='column-three'>
      <div className='high-school'>
        <p>High School</p>
        <input type='text' placeholder='school name'/>
        <input type='text' placeholder='city' />
        <label>Start</label>
        <input type='date' placeholder='' />
        <label>passed out on</label>
        <input type="date" placeholder='' />
      </div>
      <div className='undergrad'>
        <p>Undergrad</p>
        <input type='text' placeholder='college/university name'/>
        <input type='text' placeholder='city' />
        <label>Start</label>
        <input type='date' placeholder='' />
        <label>graduated out on</label>
        <input type="date" placeholder='' />
      </div>
      <div className='postgrad'>
        <p>Post Graduate</p>
        <input type='text' placeholder='college/unicersity name'/>
        <input type='text' placeholder='city' />
        <label>Start</label>
        <input type='date' placeholder='' />
        <label>graduated out on</label>
        <input type="date" placeholder='' />
      </div>
      </div>
      <div className='column-three '>
        {preview()}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '75%' }}></div>
      </div>
    </div>
  )
}

export default Stepthree;