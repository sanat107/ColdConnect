import React from 'react'

const Steptwo = ({formData, setFormData}) => {
  
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
      </div>
    )
}

  return (
    <div>
      <h3>Step 2: Work Experience</h3>
      <div className='input-field'>
        <div className='column'>
          <input type='text' placeholder='Job title' onChange={(event)=> setFormData({...formData, jobTitle: event.target.value})} />
          <input type='text' placeholder='employer'onChange={(event)=> setFormData({...formData, employer: event.target.value})} />
          <input type='text' placeholder='city, country'  onChange={(event)=> setFormData({...formData, jobplace: event.target.value})}/>
          <label>Start date </label>
          <input type='date' placeholder='DD-MM-YYYY' onChange={(event)=> setFormData({...formData, start: event.target.value})}/>
          <label>End date</label>
          <input type='date' placeholder='DD-MM-YYYY' onChange={(event)=> setFormData({...formData, end: event.target.value})}/>

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