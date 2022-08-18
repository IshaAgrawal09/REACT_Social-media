import React, { useState } from "react";
import CartContext from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Signup = () => {
  const { userArr, setUserArr, count, setCount } = useContext(CartContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signup = () => {
    if (
      fullname === "" ||
      email === "" ||
      username === "" ||
      password === "" ||
      mobile === "" ||
      city === "" ||
      country === "" ||
      code === ""
    ) {
      setError("Please fill all the Fields!");
    } else {
      if (!/^[0-9]*$/.test(mobile) || mobile.length != 10) {
        setError("Please fill valid phone number!");
        setMobile("");
      } else if (!/^[0-9]*$/.test(code) || code.length != 6) {
        setError("Please fill valid pin code (Ex: 226010)!");
        setCode("");
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setError("You have entered an invalid email!");
        setEmail("");
      } else {
        setUserArr([
          ...userArr,
          {
            id: count,
            username: username,
            password: password,
          },
        ]);
        setCount(count + 1);
        setError("");
        setSuccess("Account created successfully!");
        setFullname("");
        setCity("");
        setCode("");
        setCountry("");
        setEmail("");
        setMobile("");
        setPassword("");
        setUsername("");
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="loginBg">
        <img src="loginBG.jpg" alt="" />
      </div>
      <div className="login">
        <h2>SIGN UP</h2>
        <p style={{ color: "green" }}>{success}</p>
        <p id="error">{error}</p>
        <form>
          <div>
            <input
              type="text"
              required
              placeholder="Full Name"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile No:"
              value={mobile}
              minLength={10}
              maxLength={10}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="country"
              placeholder="Country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
            <input
              type="text"
              className="country"
              placeholder="Code"
              minLength={6}
              maxLength={6}
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </div>
          <div>
            Have an account? &nbsp; <Link to="/">Login</Link>
          </div>
          <div>
            <input type="submit" id="loginButton" onClick={signup} SIGNUP />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
