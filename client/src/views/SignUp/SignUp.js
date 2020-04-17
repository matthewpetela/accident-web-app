
import './SignUp.css';
import Icon from '../../assets/icons/userlog.png'
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import NavBar from "../../components/Header/NavBar";

class Signin extends Component {

   constructor() {
   super(); 

    this.state = {
        email: '',
        password: '',
        name: '',
        hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //console.log(this.state);
}

handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
}

 handleSubmit(e) {
    e.preventDefault();
    
    console.log('The form was submitted with the following data:');
    console.table(this.state);

  axios
    .post('http://localhost:5000/api/users/register', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
}
render() {
    return (
        <div className="frontpage">
        <Button onClick={() => this.props.history.push('/home')}>{'〈'}</Button>
        <div className="front__Aside">
        <img src={Icon} className="user-logo" alt="Icon" />

        </div>
        <div className="front__Form">
        
        <div className="FormCenter">

        <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          
            <div className = "FormField">
                
                <div className = "FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} /> 
                </div>

                <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}  />
              </div>

                <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
              </div>

              <div className="FormField">
              <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} />  I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
                </div>


              <div className="FormField">
              <button className="FormField__Button mr-20">Sign up</button>
              </div>

              </div>

            </form>
            
            
        </div>

      
      </div>
     
       </div>

    
  );
}

}


export default Signin;
