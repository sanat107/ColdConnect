import React from 'react';
import Navbar from "../Navbar/Navbar.jsx"
import { Link } from 'react-router-dom';


const Home = () => { 
  return (
    <>
    <Navbar/>
    <button> <Link to="/generatemail" >Get started</Link> </button>
    </>
  ) 
}

export default Home
