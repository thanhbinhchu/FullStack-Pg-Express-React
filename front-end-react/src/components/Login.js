import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    let navigate = useNavigate();

    const login = () => {

        const data = {username : username, password : password};

        axios.post("http://localhost:4000/members/login", data).then((response) => { 
            
            console.log(response.data);

            if(response.data.error){
              alert(response.data.error)
            }else{
              localStorage.setItem("accessToken", response.data.token);
              setAuthState({
                username: response.data.username,
                id:response.data.id,
                last_name: response.data.last_name,
                statusbar:true
              });
              navigate('/table');
            }
    })
};

    return (
    <div className="form-control form-floating form-label form-text">
        <div className="my-4">

        
        <h5>Username:</h5>
      <input className="col-3"
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

        </div>

        <div className="my-4">

        
      <h5>Password:</h5>
      <input
        className="col-3"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div className="my-4">
          
        <button onClick={login} className="btn-lg btn-block btn-primary"> Login </button>

      </div>

      <div className="form-control form-text| my-4">
        <div className="my-4">
        <p>You dont have any account ???? Don't worry </p>
        <button onClick={() => navigate('/register')} className="btn-lg btn-block btn-danger">Register here !!!</button>
      </div>
        
      </div>

      
    </div>

    </div>


)
}

export default Login
