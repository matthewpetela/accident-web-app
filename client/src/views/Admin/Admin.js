import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import NavBar from "../../components/Header/NavBar"
import axios from 'axios';

class Admin extends Component{

constructor(){
  super();

  this.state = {
    name: '',
    path: '',
    size: '',
    type: '',
    lastModified: ''
  };

  this.handleUpload = this.handleUpload.bind(this);

}

handleUpload(acceptedFiles){

  const formData = new FormData();

  formData.append("file", acceptedFiles[0]);

  console.log(formData);
  console.log(acceptedFiles);

  return axios.post('http://localhost:5000/api/upload/crashes', localStorage.getItem("token"), formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
  }).then(response =>{
    console.log(response);
  }).catch(error => {
    console.log(error)
  })


}

//acceptedFiles => console.log(acceptedFiles)

render(){

  console.log(localStorage.getItem("admin"))
  if (localStorage.getItem("admin") == 'true'){
    return (
    <div className="App">
      <div className="head">
        <h1> City Traffic </h1>
      </div>
      <NavBar/>
      <Dropzone onDrop={acceptedFiles => this.handleUpload(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
    </div>
  );
  }
  else{

    return(
      <div className="App">
        <h1> User is not admin </h1>
      </div>
    );
  }
}
}
export default Admin;
