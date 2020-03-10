import React ,{useEffect, useState} from 'react';
import logo from '../../assets/icons/logo.png';
import NavBar from "../../components/Header/NavBar";
import request from 'request'
import './Map.css';

function Map(){

    var [weatherData, setWeatherData] = useState('Blank');

    useEffect(() => {
        // Update the document title using the browser API
        request({
            url: 'http://localhost:3000//api/weather/test', //HARDCODED TO NEW YORK CITY
        }, async (error, response, body) => {
            if (error) {
                setWeatherData('Error');
                console.log(error);
            }else{
                setWeatherData(body);
            }
        });
    },[]);

  return (
    <div className='App'>
      <inout type='text' placeholder="Search"/>
      <div className='head'>
        <h1> City Traffic </h1>
      </div>
      <NavBar/>
        <p>{weatherData}</p>

    </div>
  )
}

export default Map;
