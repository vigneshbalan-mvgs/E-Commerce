import React from "react";

import "./CSS/Login.css";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Don't have an account?
          <span>
            
                     </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privary policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
