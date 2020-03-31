import React ,{useEffect, useState} from 'react';
import logo from '../../assets/icons/logo.png';
import NavBar from "../../components/Header/NavBar";
import request from 'request'
import './Map.css';

function Map(){

    //var [weatherData, setWeatherData] = useState('Blank');
	var [summaryData, setSummaryData] = useState('Loading...');
	
    useEffect(() => {
        // Update the document title using the browser API
        request({
            //url: 'https://accident-web-app.herokuapp.com/api/weather/test', //HARDCODED TO NEW YORK CITY
			url: 'http://localhost:3000/api/weather/test', //HARDCODED TO NEW YORK CITY
        }, async (error, response, body) => {
            if (error) {
                setSummaryData('error');
                console.log(error);
            }else{
				var fullBody = JSON.parse(body);
				
				setSummaryData(fullBody.daily.summary);
                //setWeatherData(fullBody.currently.time);
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
        <p>{summaryData}</p>

    </div>
  )
}

export default Map;
