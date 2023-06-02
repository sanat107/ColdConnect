
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import './ResumeSelect.css';

// const ResumeSelect = () => {
//   const navigate = useNavigate();

//   const handleFirstClick = () => {
//     navigate('/generatemail'); // Redirect to the generateMail route
//   };

//   const handleSecondClick = () => {
//     navigate('/generateresume'); // Redirect to the generateResume route
//   };

//   return (
//     <>
//       <Navbar />

//       <div className='main'>
//         <li href="" onClick={handleFirstClick}>
//           <div className='first'>
//             <h2>I already have a resume</h2>
//             <p>We'll re-format it and fill in your information so you don't have to.</p>
//           </div>
//         </li>

//         <li onClick={handleSecondClick}>
//           <div className="second">
//             <h2>Create a new resume</h2>
//             <p>We will help you create a resume step by step</p>
//           </div>
//         </li>
//       </div>

//       <button className='next'>
//         <span>Next</span>
//       </button>

//       <button className='prev'>
//         <span>Go Back</span>
//       </button>
//     </>
//   );
// };

// export default ResumeSelect;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ResumeSelect.css';

const ResumeSelect = () => {
  const navigate = useNavigate();

  const handleFirstClick = () => {
    navigate('/generatemail'); // Redirect to the generateMail route
  };

  const handleSecondClick = () => {
    navigate('/generateresume'); // Redirect to the generateResume route
  };

  const handlePrevClick = () => {
    navigate('/'); // Redirect to the home page route
  };

  return (
    <>
      <Navbar />

      <div className='main'>
        <li href="" onClick={handleFirstClick}>
          <div className='first'>
            <h2>I already have a resume</h2>
            <p>We'll re-format it and fill in your information so you don't have to.</p>
          </div>
        </li>

        <li onClick={handleSecondClick}>
          <div className="second">
            <h2>Create a new resume</h2>
            <p>We will help you create a resume step by step</p>
          </div>
        </li>
      </div>

      <button className='next'>
        <span>Next</span>
      </button>

      <button className='prev' onClick={handlePrevClick}>
        <span>Go Back</span>
      </button>
    </>
  );
};

export default ResumeSelect;
