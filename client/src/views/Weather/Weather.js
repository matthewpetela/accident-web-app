import React ,{useEffect, useState} from 'react';
import NavBar from "../../components/Header/NavBar";
import request from 'request'
import './Weather.css';
import defaultIcon from '../../assets/icons/earth.png'
import rainIcon from '../../assets/icons/rain.png'
import cloudyIcon from '../../assets/icons/cloudy.png'
import clearDayIcon from '../../assets/icons/clearDay.png'
import clearNightIcon from '../../assets/icons/clearNight.png'
import snowIcon from '../../assets/icons/snow.png'
import sleetIcon from '../../assets/icons/sleet.png'
import windIcon from '../../assets/icons/wind.png'
import fogIcon from '../../assets/icons/fog.png'
import partlyCloudyDayIcon from '../../assets/icons/partlyCloudyDay.png'
import partlyCloudyNightIcon from '../../assets/icons/partlyCloudyNight.png'

import {Form} from 'react-bootstrap';

function Weather(){

	const imageStyling = {
        display: 'block',
        margin: 'auto',
        width: '60%',
        marginTop: '1px'
    }

    //var [weatherData, setWeatherData] = useState('Blank');
	var [summaryData, setSummaryData] = useState('Loading...');
	var [precipData, setPrecipData] = useState('Loading...');
	var [weatherIcon, setWeatherIcon] = useState(defaultIcon);
	var [iconData, setIconData] = useState('Loading...');
	var [visibilityData, setVisibilityData] = useState('Loading...');
	
    useEffect(() => {
        // Update the document title using the browser API
        request({
            url: 'https://accident-web-app.herokuapp.com/api/weather/test', //HARDCODED TO NEW YORK CITY
			//url: 'http://localhost:3000/api/weather/test', //HARDCODED TO NEW YORK CITY
        }, async (error, response, body) => {
            if (error) {
                setSummaryData('error');
                console.log(error);
            }else{
				var fullBody = JSON.parse(body);
				
				// Set the paragraph data...
				setSummaryData(fullBody.hourly.summary);
				setPrecipData(fullBody.currently.precipIntensity);
				setVisibilityData(fullBody.currently.visibility);
				
				var weatherType = fullBody.daily.icon;
				if(weatherType = "rain") {
					setWeatherIcon(rainIcon);
					setIconData("rain");
				}
				else if(weatherType = "cloudy") {
					setWeatherIcon(cloudyIcon);
					setIconData("cloudy");
				}
				else if(weatherType = "clear-day") {
					setWeatherIcon(clearDayIcon);
				}
				else if(weatherType = "clear-night") {
					setWeatherIcon(clearNightIcon);
				}
				else if(weatherType = "clear-night") {
					setWeatherIcon(clearNightIcon);
				}
				else if(weatherType = "snow") {
					setWeatherIcon(snowIcon);
				}
				else if(weatherType = "sleet") {
					setWeatherIcon(sleetIcon);
				}
				else if(weatherType = "wind") {
					setWeatherIcon(windIcon);
				}
				else if(weatherType = "fog") {
					setWeatherIcon(fogIcon);
				}
				else if(weatherType = "partly-cloudy-day") {
					setWeatherIcon(partlyCloudyDayIcon);
				}
				else if(weatherType = "partly-cloudy-night") {
					setWeatherIcon(partlyCloudyNightIcon);
				}
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
   
	  <div className='outerDiv'>
	    <div className='CityName'>
		  <h1>New York City</h1>
	    </div>
		<div className='flexContainer'>
			<div className='Form'>
				<Form>
					<Form.Control as="select">
					  <option>New York City</option>
					</Form.Control>
				</Form>
			</div>
			<div className='Icon'>
				<img style={imageStyling} src={weatherIcon} />
				{/* <p1>{iconData}</p1> */}
			</div>
		</div>
		<div className='flexContainerTwo'>
			<div className='textBlock'>
				{summaryData} There is a {precipData}% chance of rain. Visibility is {visibilityData} miles.
			</div>
		</div>
	  </div>	
    </div>
  )
}

export default Weather;
