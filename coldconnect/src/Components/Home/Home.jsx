import React from 'react';
import Navbar from "../Navbar/Navbar.jsx"
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
    <Navbar/>
    <button>  <Link to="/resumeselect" >Get started</Link> </button>
    <button><Link to="/generatResume" >Resume section</Link></button>
    </>
  )
}

export default Home
