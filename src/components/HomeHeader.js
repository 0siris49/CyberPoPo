import React, { Fragment, useState} from "react";   
import Register from "./Register";
import Login from "./Login";
import "./HomeHeader.css";
import ReactDOM from 'react-dom/client'

const HomeHeader = () => {
    const login = () => {
        console.log("Login link clicked");
        const root = ReactDOM.createRoot(document.getElementById('root')); 
        root.render(<Login/>);
    }

    const register = () => {
        console.log("Register link clicked");
        const root = ReactDOM.createRoot(document.getElementById('root')); 
        root.render(<Register/>);
    }
  return (  
    <div>
      <div className="header">
        <a href="#default" className="logo">
          Cyber Property
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <Fragment>
          <a onClick={login} style={{cursor: "pointer"}}>Login</a>
          </Fragment>
          <a href="#about">Register</a>
        </div>
      </div>

      <div style={{ paddingLeft: "20px" }}>
        <h1>This is home page</h1>
      </div>
    </div>
  );
};  

export default HomeHeader;
