import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const emailConf = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  const passwordConf = (e) => {
    setPassword(e.target.value);
    if (
      !e.target.value.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
      )
    ) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const loginCredintials = () => {
    
   axios.post('https://tutorial4-api.herokuapp.com/api/users/login',{
    "email": email,
    "password" : password
   }).then(
     res => {
       if(res.status=200) {
       routeChange();
        
    }
     }
   ).finally(console.log("data"));
  }

  const routeChange = () => { 
    navigate("Profiles");
  }

  const validate = (e) => {
    e.preventDefault();
    if (
      isEmailValid &&
      isPasswordValid &&
      email.length > 0 &&
      password.length >8 
    ) {
      loginCredintials();
    } else {
      alert("Credentials are wrong please enter the correct credentials");
    }
  };
  return (
    <div>
    <p>Login</p>
    <form onSubmit={validate}>
    <input type="email" placeholder="Please Enter Email" value={email} onChange={emailConf} /><br/><br/>
    {isEmailValid ? null : (
            <p style={{ color: "red"}}>
              Please Enter the correct email Address
            </p>
          )}
    <input type="password" placeholder="Please Enter Password" value={password} onChange={passwordConf}/><br/><br/>
    {isPasswordValid ? null : (
            <div style={{ color: "red"}}>
               Please Enter the correct Password
            </div>
          )}
    <input type="button" 
      type="submit"
        value="Log In" />
      <br />
      </form>
  </div>
  );
}

export default Login