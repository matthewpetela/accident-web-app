import React ,{useEffect, useState} from 'react';
import NavBar from "../../components/Header/NavBar";
import request from 'request';
import {Bar} from 'react-chartjs-2';
import {ListGroup, Button, Table, InputGroup, FormControl, ButtonGroup, OverlayTrigger, Popover, Dropdown} from 'react-bootstrap';
import './Rankings.css';
import cityData from '../../adminData/cityData';

function Rankings(){
  useEffect(() => setTop(), []);

  //var [weatherData, setWeatherData] = useState('Blank');
  var [accidentData, setAccidentData] = useState([0, 0, 0, 0]);
  var [graphText, setGraphText] = useState('Select data period');
  var [chosen, setChosen] = useState(-1);
  var [city1, setCity1] = useState(['', '', '', '']);
  var [city2, setCity2] = useState(['', '', '', '']);
  var [city3, setCity3] = useState(['', '', '', '']);
  var [city4, setCity4] = useState(['', '', '', '']);
  var [topCities, setTopCities] = useState(['', '', '', '', '']);
  var [annualCrashes, setAnnualCrashes] = useState(['', '', '', '', '']);

  const data = {
    labels: topCities,
    datasets: [
      {
        label: 'Accidents',
        backgroundColor: 'rgba(255,99,132,1)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: accidentData
      }
    ]
  };

  /*useEffect(() => {
    // Update the document title using the browser API
    request({
      url: 'https://accident-web-app.herokuapp.com/api/weather/test', //HARDCODED TO NEW YORK CITY
    }, async (error, response, body) => {
      if (error) {
        setWeatherData('Error');
        console.log(error);
      } else {
        setWeatherData(body);
      }
    });
  },[]);*/

  const setWeekly = () => {
    setAccidentData([Math.ceil(annualCrashes[0] / 52) , Math.ceil(annualCrashes[1] / 52), Math.ceil(annualCrashes[2] / 52), Math.ceil(annualCrashes[3] / 52), Math.ceil(annualCrashes[4] / 52)]);
    setGraphText('Weekly');
  }

  const setMonthly = () => {
    setAccidentData([Math.ceil(annualCrashes[0] / 12) , Math.ceil(annualCrashes[1] / 12), Math.ceil(annualCrashes[2] / 12), Math.ceil(annualCrashes[3] / 12), Math.ceil(annualCrashes[4] / 12)]);
    setGraphText('Monthly');
  }

  const setYearly = () => {
    setAccidentData(annualCrashes);
    setGraphText('Yearly');
  }

  const submitCity = ()  => {    
    cityData.map((data, index) => 
    {
      console.log(data.city + ' ' + index);
      if (chosen == index) {
        setCity1([data.city, data.annualCrash, data.avgTemp[0] + ' °F']);
        setSimilar(cityData, data);
      }
    });
  }

  const handleChange = (value) => {
    setChosen(value);
  }

  const setSimilar = (data, city) => {
    console.log(data);
    let neighbors = city.tempNeighbors;
    console.log(city);
    console.log(neighbors);
    let similar2 = [neighbors[0], '', ''];
    let similar3 = [neighbors[1], '', ''];
    let similar4 = [neighbors[2], '', ''];
    console.log(neighbors[0]);
    data.map(datum => 
    {
      console.log('datum ' + datum)
      if (datum.city == neighbors[0]) {
        similar2[1] = datum.annualCrash;
        similar2[2] = datum.avgTemp[0] + ' °F';
      }
      else if (datum.city == neighbors[1]) {
        similar3[1] = datum.annualCrash;
        similar3[2] = datum.avgTemp[0] + ' °F';
      }
      else if (datum.city == neighbors[2]) {
        similar4[1] = datum.annualCrash;
        similar4[2] = datum.avgTemp[0] + ' °F';
      }
    })
    setCity2(similar2);
    setCity3(similar3);
    setCity4(similar4);
  }

  const setTop = () => {
    let accidents = [];
    cityData.map(data => 
    {
      accidents.push([data.annualCrash, data.city]);
    })
    console.log(accidents);
    let top = accidents.sort((a, b) => a[0]-b[0]).slice(0, 5);
    let accidentNums = [];
    let names = [];
    top.map(data =>
    {
      accidentNums.push(data[0]);
      names.push(data[1]);
      console.log(data);
    })
    setAnnualCrashes(accidentNums);
    setTopCities(names);
  }

  return (
    <div className='App'>
      <div className='head'>
        <h1> City Traffic </h1>
      </div>
      <NavBar/>
      <h2> General Rankings </h2>
      <div className='top'>
        <div className='graph'>
          <h3>{graphText}</h3>
          <Bar
            data ={data}
            width={2}
            height={1}
            options= {{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}}
          />
          <Button onClick={setWeekly} variant='secondary'>Week</Button>
          <Button onClick={setMonthly} variant='secondary'>Month</Button>
          <Button onClick={setYearly} variant='secondary'>Year</Button>
        </div>
        <div className='sidebar'>
          <h3>Top Cities</h3>
          <ListGroup>
            <ListGroup.Item variant="warning">{topCities[0]}</ListGroup.Item>
            <ListGroup.Item variant="secondary">{topCities[1]}</ListGroup.Item>
            <ListGroup.Item>{topCities[2]}</ListGroup.Item>
            <ListGroup.Item>{topCities[3]}</ListGroup.Item>
            <ListGroup.Item>{topCities[4]}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <h2>Compare Cities</h2>
      <div className='bottom'>
        <div className='tableWrap'>
          <Table bordered variant="dark" striped>
            <thead>
              <tr>
                <th>City</th>
                <th>Accidents (Yearly)</th>
                <th>Weather</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{city1[0]}</td>
                <td>{city1[1]}</td>
                <td>{city1[2]}</td>
              </tr>
              <tr>
                <td>{city2[0]}</td>
                <td>{city2[1]}</td>
                <td>{city2[2]}</td>
              </tr>
              <tr>
                <td>{city3[0]}</td>
                <td>{city3[1]}</td>
                <td>{city3[2]}</td>
              </tr>
              <tr>
                <td>{city4[0]}</td>
                <td>{city4[1]}</td>
                <td>{city4[2]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='selector'>
          <InputGroup className="mb-3">
          <select class="browser-default custom-select" onChange={event => (handleChange(event.target.value))}>
            <option selected>Choose a city to compare with competitors...</option>  
            {
              cityData.map((data, index) => 
              (
                <option value={index}>{data.city}</option>
              ))
            }
            </select>
            <InputGroup.Prepend>
              <Button variant="secondary" onClick={submitCity}>Submit</Button>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </div>
      {/*<p>{weatherData}</p>*/}
    </div>
  )
}

export default Rankings;
