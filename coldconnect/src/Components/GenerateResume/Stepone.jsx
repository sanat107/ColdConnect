import React from 'react';
import './resume.css'

const Stepone = ({formData, setFormData}) => {

  const preview =()=>{
      return(
        <div className='preview'>
            <div className="">Name: {formData.name} </div>
            <div>email: {formData.email} </div>
            <div>phone:  {formData.phone} </div>
            <div>country: {formData.country} </div>
            <div>profession: {formData.profession} </div>
        </div>
      )
  }

  return (
    <div>
      <h3>Step 1: Personal Information</h3>
      <div className='input-field'>
        <div className='column'>
      <input type="text" name="name" value={formData.name} placeholder="Name" onChange={(event)=> setFormData({...formData, name: event.target.value})} />
      <input type="email" name="email"  placeholder="Email" onChange={(event)=> setFormData({...formData, email: event.target.value})} />
      <input type="tel" name="phone"  placeholder="Phone" onChange={(event)=> setFormData({...formData, phone: event.target.value})} />
      <input type="text" name="country"  placeholder="Country"  onChange={(event)=> setFormData({...formData, country: event.target.value})}/>
      <input type="text" name="profession"  placeholder="Profession" onChange={(event)=> setFormData({...formData, profession: event.target.value})} />
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