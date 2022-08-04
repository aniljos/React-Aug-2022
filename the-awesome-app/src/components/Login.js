import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Login(){

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function login(){

        try {
            
            const url = "http://localhost:9000/login";
            const response =  await axios.post(url, {name, password});
            setMessage("");
            sessionStorage.setItem("isAuth", "true");
            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuth: true,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
                }
            })


            navigate("/products");

        } catch (error) {
            
            sessionStorage.removeItem("isAuth");
            setMessage("Invalid Credentials");
            console.log("error", error);
            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuth: false,
                    accessToken: "",
                    refreshToken: ""
                }
            })
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