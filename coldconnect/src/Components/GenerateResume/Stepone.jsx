import React from 'react';
import './resume.css'

const Stepone = ({formData, setFormData}) => {

  const preview =()=>{
      return(
        <div className='preview'>
                  <h2 className='preview-head'>Preview</h2>
            <li className="">Name: {formData.name} </li>
            <li>email: {formData.email} </li>
            <li>phone:  {formData.phone} </li>
            <li>country: {formData.country} </li>
            <li>profession: {formData.profession} </li>
        </div>
      )
  }

  return (
    <div>
      <h3 className='step1' >Step 1: Personal Information</h3>
      <div className='input-field'>
        <div className='column'>
      <input type="text" className="input-box" name="name" value={formData.name} placeholder="Name" onChange={(event)=> setFormData({...formData, name: event.target.value})} />
      <input type="email" className="input-box" name="email"  placeholder="Email" onChange={(event)=> setFormData({...formData, email: event.target.value})} />
      <input type="tel" className="input-box" name="phone"  placeholder="Phone" onChange={(event)=> setFormData({...formData, phone: event.target.value})} />
      <input type="text" className="input-box" name="country"  placeholder="Country"  onChange={(event)=> setFormData({...formData, country: event.target.value})}/>
      <input type="text" className="input-box" name="profession"  placeholder="Profession" onChange={(event)=> setFormData({...formData, profession: event.target.value})} />
      </div>
      <div className='column'>
        {preview()}
      </div>
    </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '25%' }}></div>
      </div>
    </div>
  )
}

export default Stepone;