import React from 'react'
import "./resume.css"

const Steptwo = ({formData, setFormData}) => {
  
  const preview =()=>{
    return(
      <div className='preview'>
                <h2 className='preview-head'>Preview</h2>
          <li>Name: {formData.name} </li>
          <li>email: {formData.email} </li>
          <li>phone:  {formData.phone} </li>
          <li>country: {formData.country} </li>
          <li>profession: {formData.profession} </li>
          <li>Work History
            <li>Job Title: {formData.jobTitle} </li>
            <li>employer: {formData.employer} </li>
            <li>Start date: {formData.start} </li>
            <li>end date : {formData.end} </li>
          </li>
      </div>
    )
}

  return (
    <div>
      <h3 className='step2' >Step 2: Work Experience</h3>
      <div className='input-field'>
        <div className='column'>
          <input type='text' className="input-box" placeholder='Job title' onChange={(event)=> setFormData({...formData, jobTitle: event.target.value})} />
          <input type='text'className="input-box" placeholder='employer'onChange={(event)=> setFormData({...formData, employer: event.target.value})} />
          <input type='text' className="input-box" placeholder='city, country'  onChange={(event)=> setFormData({...formData, jobplace: event.target.value})}/>
          <label>Start date </label>
          <input className="input-box" type='date' placeholder='DD-MM-YYYY' onChange={(event)=> setFormData({...formData, start: event.target.value})}/>
          <label>End date</label>
          <input className="input-box" type='date' placeholder='DD-MM-YYYY' onChange={(event)=> setFormData({...formData, end: event.target.value})}/>

      </div>
      <div className='column'>
        {preview()}
      </div>
    </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '50%' }}></div>
      </div>

    </div>
  )
}

export default Steptwo;