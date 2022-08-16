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
      if (!/^[0-9]*$/.test(mobile)) {
        setError("Mobile Number can only contains numbers!");
        setMobile("");
      } else if (!/^[0-9]*$/.test(code)) {
        setError("Pin Code can only contains numbers!");
        setCode("");
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
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            required
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
            required
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="country"
            required
            placeholder="Country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
          <input
            type="text"
            className="country"
            required
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
          <button id="loginButton" onClick={signup}>
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
