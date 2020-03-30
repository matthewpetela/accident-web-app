import React from 'react';
import NavBar from "../../components/Header/NavBar";
import './About.css';

function About(){
  return (
    <div className='App'>
      <inout type='text' placeholder="Search"/>
      <div className='head'>
        <h1> City Traffic </h1>
      </div>
      <NavBar/>
      
    </div>
  )
}

export default About;
