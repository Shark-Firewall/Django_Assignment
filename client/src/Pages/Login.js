import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [UserName, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const user = {
    userName: UserName,
    password: Password,
  };

  function handleSubmit() {
    axios
      .post("http://127.0.0.1:8000/login/", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="login-container">
      <div className="login-section">
        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="joinbtn">
          Login In
        </button>
        <p>
          New User <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
