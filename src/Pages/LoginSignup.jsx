import React from "react";
import {Link} from "react-router-dom"
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
      Already have an accont? <span> <Link href="./Login">Login here</Link> login in </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
        </div>
        <p>By continuing, i agree to the terms of use & privary policy.</p>
      </div>
    </div>
  );
};

export default LoginSignup;
