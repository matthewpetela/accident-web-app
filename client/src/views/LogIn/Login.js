import React from 'react';
import './Login.css';
import Icon from '../../assets/icons/userlog.png'

function Login(){

    const placeholderText ="this is the log in page please type the necessay information"
    return (

        <div className="frontpage">
        
        <div className="front__Aside">

        <img src={Icon} className="user-logo" alt="Icon" />

        </div>
        <div className="front__Form">
        
        <div className="FormCenter">
            <form className = "FormField">
                
                <div className = "FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" /> 
                </div>

                <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
              </div>

                <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
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


export default Login;
