import React from 'react';
import NavBar from "../../components/Header/NavBar";
import {Jumbotron, Tab, ListGroup, Row, Col} from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';
import './About.css';

function About(){
  return (
    <div className='About'>
      <input type='text' placeholder="Search"/>
      <div className='head'>
        <h1> City Traffic </h1>
      </div>
      <NavBar/>
      <h2>About City Traffic</h2>
      <div className='aboutText'>
      <p className='desc'>
        This web app is designed to help users achieve discounts on their insurance.
        We allow for insurance companies to input their information on accidents in different cities,
        and these cities are then ranked based on their statistics. Click on the tabs below to learn
        more about our features.
      </p>
      <Jumbotron>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Rankings
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Driving Tests
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <p>
                  Users can also search for their own city and compare the statistics of their 
                  city with other cities. Users residing in the cities with the best accident 
                  reports will recieve insurance benefits.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <p>
                    Users can take our driving tests in order to gain stars, which can be 
                    redeemed for insurance benefits.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Jumbotron>
      <img src={logo} className="trafficLogo" alt="logo" />
      </div>
    </div>
  )
}

export default About;
