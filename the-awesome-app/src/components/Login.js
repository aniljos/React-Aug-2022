import { useState } from "react";
import axios from 'axios';

function Login(){

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    async function login(){

        try {
            
            const url = "http://localhost:9000/login";
            const response =  await axios.post(url, {name, password});
            setMessage("");
        } catch (error) {
            
            setMessage("Invalid Credentials");
            console.log("error", error);
        }

    }

    return (
        <div>
            <h3>Login</h3>
            
             {message ?  <div className="alert alert-danger">{message}</div> : null}

            <div className="form-group">
                <label>UserName</label>
                <input className="form-control" placeholder="UserName" 
                            value={name} onChange={evt => setName(evt.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"
                            value={password} onChange={evt => setPassword(evt.target.value)}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;