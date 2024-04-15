import React, { Fragment, useState} from "react";

const Register = () => {

    const [userName, setUserName] = useState("")
    const [userPass, setUserPass] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {userName, userPass, userEmail};
            const response = await fetch("http://localhost:5000/Register",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <Fragment>
            <h1>Registration Information</h1>
            <form onSubmit={onSubmitForm}>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
                <input type="text" value={userPass} onChange={e => setUserPass(e.target.value)}/>
                <input type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                <button>Register</button>
            </form>
        </Fragment>
    );
}

export default Register;