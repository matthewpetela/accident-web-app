import React ,{useEffect, useState} from 'react';
import request from 'request'
import NavBar from "../../components/Header/NavBar";

function Admin(){

    var [userData, setUserData] = useState('Loading...');

    useEffect( ()=> {
        request({
            url: 'http://localhost:3000/api/users/',
        }, async (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                var fullBody = body;

                setUserData(fullBody.name);
            }
        });
    },[]);

    return(
        <div className="App">
            <div className="head">
                <h1>City Traffic </h1>
            </div>
            <NavBar/>
            <b> Sorry, the following user does not have administration access.</b>
        </div>
    )
}

export default Admin;