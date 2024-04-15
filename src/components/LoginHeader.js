import React, { Fragment, useState} from "react";   
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import ReactDOM from 'react-dom/client';
import "./LoginHeader.css";

const LoginHeader = () => {
    const register = () => {
        console.log("Register link clicked");
        const root = ReactDOM.createRoot(document.getElementById('root')); 
        root.render(<Register/>);
    }
    const home = () => {
        console.log("Home link clicked");
        const root = ReactDOM.createRoot(document.getElementById('root')); 
        root.render(<Home/>);
    }
  return (  
    <div>
      <div className="headerLogin">
        <a href="#default" className="logo">
          Cyber Property
        </a>
        <div className="header-right">
        <a onClick={home} style={{cursor: "pointer"}}>
            Home
          </a>
          <a href="#about">Register</a>
        </div>
      </div>

    </div>
  );
};  

export default LoginHeader;
