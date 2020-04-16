import React ,{useEffect, useState} from 'react';
import NavBar from "../../components/Header/NavBar";
import request from 'request';
import {Bar} from 'react-chartjs-2';
import {ListGroup, Button, Table, InputGroup, FormControl, ButtonGroup, OverlayTrigger, Popover} from 'react-bootstrap';
import './Rankings.css';

function Rankings(){

  var [weatherData, setWeatherData] = useState('Blank');
  var [accidentData, setAccidentData] = useState([0, 0, 0, 0, 0]);
  var [graphText, setGraphText] = useState('Select data period');
  var [search, setSearch] = useState('');
  var [cities, setCities] = useState(0);
  var [city1, setCity1] = useState(['', '', '', '']);
  var [city2, setCity2] = useState(['', '', '', '']);
  var [city3, setCity3] = useState(['', '', '', '']);
  var [city4, setCity4] = useState(['', '', '', '']);

  const data = {
    labels: ['New York City', 'Chicago', 'Orlando', 'Gainesville', 'Baltimore'],
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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        You can only compare up to 4 cities at a time.
      </Popover.Content>
    </Popover>
  );

  useEffect(() => {
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
  },[]);

  const setWeekly = () => {
    setAccidentData([0, 1, 2, 2, 4]);
    setGraphText('Week');
  }

  const setMonthly = () => {
    setAccidentData([11, 15, 17, 22, 30]);
    setGraphText('Month');
  }

  const setYearly = () => {
    setAccidentData([150, 190, 214, 250, 272]);
    setGraphText('Year');
  }

  const setText = (searchInput) => {
    setSearch(searchInput)
  }

  const submitCity = ()  => {
    if (search != '') {
      if(cities + 1 == 1) {
        setCity1([search, '105', '76 °F', (cities + 1).toString()]);
      } else if (cities + 1 == 2) {
        setCity2([search, '145', '95 °F', (cities + 1).toString()]);
      } else if (cities + 1 == 3) {
        setCity3([search, '120', '50 °F', (cities + 1).toString()]);
      } else if (cities + 1 == 4) {
        setCity4([search, '95', '75 °F', (cities + 1).toString()]);
      } else {
        return;
      }
      setCities(cities + 1);
      setSearch('');
    }
  }

  const removeCity1 = () => {
    setCity1(city2);
    setCity2(city3);
    setCity3(city4);
    setCity4(['', '', '', '']);
    setCities(cities - 1);
  }

  const removeCity2 = () => {
    setCity2(city3);
    setCity3(city4);
    setCity4(['', '', '', '']);
    setCities(cities - 1);
  }

  const removeCity3 = () => {
    setCity3(city4);
    setCity4(['', '', '', '']);
    setCities(cities - 1);
  }

  const removeCity4 = () => {
    setCity4(['', '', '', '']);
    setCities(cities - 1);
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
          />
          <Button onClick={setWeekly} variant='secondary'>Week</Button>
          <Button onClick={setMonthly} variant='secondary'>Month</Button>
          <Button onClick={setYearly} variant='secondary'>Year</Button>
        </div>
        <div className='sidebar'>
          <h3>Top Cities</h3>
          <ListGroup>
            <ListGroup.Item variant="warning">New York City</ListGroup.Item>
            <ListGroup.Item variant="secondary">Chicago</ListGroup.Item>
            <ListGroup.Item>Orlando</ListGroup.Item>
            <ListGroup.Item>Gainesville</ListGroup.Item>
            <ListGroup.Item>Baltimore</ListGroup.Item>
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
                <th>Accidents</th>
                <th>Weather</th>
                <th>Ranking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{city1[0]}</td>
                <td>{city1[1]}</td>
                <td>{city1[2]}</td>
                <td>{city1[3]}</td>
              </tr>
              <tr>
                <td>{city2[0]}</td>
                <td>{city2[1]}</td>
                <td>{city2[2]}</td>
                <td>{city2[3]}</td>
              </tr>
              <tr>
                <td>{city3[0]}</td>
                <td>{city3[1]}</td>
                <td>{city3[2]}</td>
                <td>{city3[3]}</td>
              </tr>
              <tr>
                <td>{city4[0]}</td>
                <td>{city4[1]}</td>
                <td>{city4[2]}</td>
                <td>{city4[3]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='selector'>
          <InputGroup className="mb-3">
          <FormControl value = {search} className="input" placeholder='Search for a city' onChange={event => (setText(event.target.value))}/>
            <InputGroup.Prepend>
              { cities < 4 && <Button variant="secondary" onClick={submitCity}>Submit</Button> }
              { cities >= 4 && <OverlayTrigger trigger="click" placement="right" overlay={popover} show={cities >= 4}>
                <Button variant="secondary" onClick={submitCity}>Submit</Button>
              </OverlayTrigger> }
            </InputGroup.Prepend>
          </InputGroup>
          <ButtonGroup className='buttons' vertical>
            { cities >= 1 && <Button onClick={removeCity1}>Remove {city1[0]}</Button> }
            { cities >= 2 && <Button onClick={removeCity2}>Remove {city2[0]}</Button> }
            { cities >= 3 && <Button onClick={removeCity3}>Remove {city3[0]}</Button> }
            { cities == 4 && <Button onClick={removeCity4}>Remove {city4[0]}</Button> }
          </ButtonGroup>
        </div>
      </div>
      {/*<p>{weatherData}</p>*/}
    </div>
  )
}

export default Rankings;
