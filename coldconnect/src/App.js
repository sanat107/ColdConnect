import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login.jsx"
import Signup from "./Components/Signup/Signup.jsx"
import Home from "./Components/Home/Home.jsx"
import GenerateMail from './Components/GenerateMail/GenerateMail.jsx';
import GenerateResume from './Components/GenerateResume/GenerateResume.jsx';
import GeneratePdf from './Components/GenerateResume/GeneratePdf.jsx';


const App = () => {
  return (
    <div className='bg-blue-300'>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>  }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/generatemail' element={ <GenerateMail/> }></Route>
        <Route path='/generatResume' element={ <GenerateResume/> }></Route>
        <Route path='/generatePdf' element={<GeneratePdf/>} ></Route>
        
      </Routes>
  </BrowserRouter>

    </div>
  )
}

export default App