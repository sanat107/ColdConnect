import React from 'react';
import './resume.css';
import { useState } from 'react';

const Stepone = ({formData, setFormData}) => {

  const [subdone, setSubdone] = useState("");;

  const validateEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Only numbers validation
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const { name, email, phone } = formData;

    if (!name.trim()) {
      alert('Name field cannot be empty');
      return;
    }

    if (!email.trim()) {
      alert('Email field cannot be empty');
      return;
    }

    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }

    if (!phone.trim()) {
      alert('Phone field cannot be empty');
      return;
    }
    if (!validatePhone(phone)) {
      alert('Invalid phone number');
      return;
    }
    setSubdone('done');
  };


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
      <h3>Step 1: Personal Information</h3>
      <div className='input-field'>
        <div className='column'>
      <input type="text" className="input-box" name="name" value={formData.name} placeholder="Name"  onChange={(event)=> setFormData({...formData, name: event.target.value})} />
      <input type="email" className="input-box" name="email"  placeholder="Email" onChange={(event)=> setFormData({...formData, email: event.target.value})} />
      <input type="tel" className="input-box" name="phone"  placeholder="Phone" onChange={(event)=> setFormData({...formData, phone: event.target.value})} />
      <input type="text" className="input-box" name="country"  placeholder="Country"  onChange={(event)=> setFormData({...formData, country: event.target.value})}/>
      <input type="text" className="input-box" name="profession"  placeholder="Profession" onChange={(event)=> setFormData({...formData, profession: event.target.value})} />
      <button className='submit-btn' onClick={handleSubmit}> {subdone === 'done' ? 'Done!' : 'Submit'}</button>
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