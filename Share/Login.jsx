import React from 'react';


function Login(){

    return(
        <div>
            <h3>Login</h3>
            
            <p>UserName</p>
            <div>
                <input className="form-control" />
            </div>
            <p>Password</p>
            <div>
                <input className="form-control" type="password" />
            </div>
            <br/>
            <button className="btn btn-success" >Login</button>
        </div>
    )
}

export default Login;