import React from 'react';
import Navbar from "../Navbar/Navbar.jsx"
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => { 
  return (
    <>
    <Navbar/>
    <button className='started' > <Link to="/resumeselect" >Get started</Link> </button>
    </>
  ) 
}

export default Home 
