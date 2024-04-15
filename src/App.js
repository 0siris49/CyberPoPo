
import './App.css';
import React,{Fragment} from 'react';
import Register from './components/Register';
import Login from "./components/Login";
import AdminPage from './components/AdminPage';
import Home from "./components/Home";


function App() {
  return(
    <Fragment>
      <div>
        <Home/>
      </div>
    </Fragment>
  );
}

export default App;
