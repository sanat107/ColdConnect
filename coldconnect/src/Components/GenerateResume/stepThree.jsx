import React from 'react';
import './resume.css';

const Stepthree = ({formData, setFormData}) => {

  const preview =()=>{
    return(
      <div className='preview'>
        <h2 className='preview-head'>Preview</h2>
          <li>Name: {formData.name} </li>
          <li>email: {formData.email} </li>
          <li>phone:  {formData.phone} </li>
          <li>country: {formData.country} </li>
          <li>profession: {formData.profession} </li>
          <div>Work History
            <li>Job Title: {formData.jobTitle} </li>
            <li>employer: {formData.employer} </li>
            <li>Start date: {formData.start} </li>
            <li>end date : {formData.end} </li>
          </div>
      </div>
    )}

  return (
    <div>
     <h2> Educational Details</h2>
      <div className='column-three'>
      <div className='high-school'>
        <p>High School</p>
        <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, school: event.target.value})} placeholder='school name'/>
        <input className="input-box" type='text' placeholder='city' onChange={(event)=> setFormData({...formData, schoolArea: event.target.value})}/>
        <label>Start</label>
        <input className="input-box" type='date' placeholder='' />
        <label>passed out on</label>
        <input className="input-box" type="date" placeholder='' />
      </div>
      <div className='undergrad'>
        <p>Undergrad</p>
        <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, undergradclg: event.target.value})} placeholder='college/university name'/>
        <input className="input-box" type='text'onChange={(event)=> setFormData({...formData, undergradArea: event.target.value})} placeholder='city' />
        <label>Start</label>
        <input className="input-box" type='date' placeholder='' />
        <label>graduated out on</label>
        <input className="input-box" type="date" placeholder='' />
      </div>
      <div className='postgrad'>
        <p>Post Graduate</p>
        <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, postgradclg: event.target.value})} placeholder='college/unicersity name'/>
        <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, postgradArea: event.target.value})} placeholder='city' />
        <label>Start</label>
        <input className="input-box" type='date' placeholder='' />
        <label>graduated out on</label>
        <input className="input-box" type="date" placeholder='' />
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