import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const user = {
    userName: UserName,
    password: Password,
    email: Email,
    firstName: FirstName,
    lastName: LastName,
    phoneNumber: PhoneNumber,
  };
  function handleSubmit() {
    axios
      .post("http://127.0.0.1:8000/signup/", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Signup-container">
      <div className="Signup-section">
        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
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
          placeholder="Enter your Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit} classname="Signup-btn">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignUp;
