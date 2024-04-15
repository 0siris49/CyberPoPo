import React, {Fragment, useState, useEffect} from "react";
import ReactDOM from 'react-dom/client'
import AdminDashboard from "./AdminPage";
import UserDashboard from "./UserDashboard";
import Register from "./Register";
import "./Login.css";
import LoginHeader from "./LoginHeader";


const Login = () => {
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

    const getLogin = async e => {
        e.preventDefault();
        try {
            const body = {loginEmail, loginPass};
            const response = await fetch("http://localhost:3000/Login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
            if(loginEmail === "admin@gmail.com"){
                const root = ReactDOM.createRoot(document.getElementById('root')); 
                root.render(<AdminDashboard isAdmin={true} />);
            }else{
                const root = ReactDOM.createRoot(document.getElementById('root')); 
                root.render(<UserDashboard/>);
            }
        } catch (error) {
            console.error(error.message);
            
        }

        
    
    }

    const register = () => {
        console.log("Register link clicked");
        const root = ReactDOM.createRoot(document.getElementById('root')); 
        root.render(<Register/>);
    }

    return(
        
        <Fragment>
            <LoginHeader/>
            <div className="flex-container">
            <form className="form" onSubmit={getLogin}>
                <h1>Cyber Property</h1>
                <label className="logindropdown"> Login as: 
                <select name="role" id="role" className="role">
                            <option value="sysadmin">System Admin</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                            <option value="REA">REA</option>
                </select>
                </label>
                
                <input type="text" name="loginEmail" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="username"/>
                <input type="text" name="loginPass" value={loginPass} onChange={e => setLoginPass(e.target.value)} placeholder="password"/>
                
                <br/><button type="submit" value="submit">Login</button>
                <p>are you a new user?</p>
                <b onClick={register} className="registerLink" style={{cursor: "pointer"}}>click here to register</b>
            </form>
            </div>

        </Fragment>
    );
}

export default Login;