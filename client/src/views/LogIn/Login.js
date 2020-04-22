import React, { Component } from 'react';
import './Login.css';
import Icon from '../../assets/icons/userlog.png'
import request from 'request';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class LogInForm extends Component{

 constructor(){
  super();

      this.state = {
          email: '',
          password: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    };

   handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
		axios
			.post(process.env.NODE_ENV === 'production'?'https://accident-web-app.herokuapp.com/api/users/login':'http://localhost:5000/api/users/login', this.state)
			.then(response => {
				console.log(response)
        localStorage.setItem("token", response.data.token.substring(7))
        localStorage.setItem("admin", response.data.admin)
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("email", this.state.email)
        console.log("token:" + localStorage.getItem("token"))
        this.props.history.push("/home");
			})
			.catch(error => {
				console.log(error)
			})

      // console.log('The form was submitted with the following data:');
      // console.log(this.state);
  }

  render(){

    return (

        <div className="frontpage">
        <Button onClick={() => this.props.history.push('/home')}>{'〈'}</Button>
        <div className="front__Aside">

        <img src={Icon} className="user-logo" alt="Icon" />

        </div>
        <div className="front__Form">

        <div className="FormCenter">

            <form onSubmit={this.handleSubmit} className="FormFields" >


                <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"  value={this.state.email} onChange={this.handleChange}/>
              </div>

                <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
              </div>


              <div className="FormField">
              <button className="FormField__Button mr-20">Log in</button>
              </div>

            </form>

            </div>



      </div>

       </div>


  );
}
}

export default LogInForm;
