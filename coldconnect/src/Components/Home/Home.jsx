import React from 'react';
import Navbar from "../Navbar/Navbar.jsx"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <Navbar/>
    <buttonc>  <Link to="/generatemail" >Get started</Link> </buttonc>
    <button><Link to="/generatResume" >Resume section</Link></button>
    </>
  )
}

export default Home
