import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  let navigate = useNavigate();
  const { userArr, setLoggedUser } = useContext(CartContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   LOGIN FUNCTION
  const login = () => {
    let flag = 0;
    if (username === "" || password === "") {
      setError("Please fill all the fields!");
    } else {
      userArr.map((item) => {
        if (username === item.username && password === item.password) {
          flag = flag + 1;
          setLoggedUser(item.username);
          navigate("/home");
        }
      });
      if (flag === 0) {
        setError("Username or Password is invalid!");
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="loginBg">
        <img src="loginBG.jpg" alt="" />
      </div>
      <div className="login">
        <h2>LOGIN</h2>
        <p id="error">{error}</p>
        <div>
          <input
            type="text"
            id="username"
            required
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="pass"
            required
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          Don't have an account? &nbsp; <Link to="/signup">Signup</Link>
        </div>
        <div>
          <button id="loginButton" onClick={login}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
