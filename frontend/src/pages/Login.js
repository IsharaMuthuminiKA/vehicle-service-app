import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon">🔐</div>
        <h2>Admin Login</h2>

        <label>Username</label>
        <input type="text" placeholder="Username" />

        <label>Password</label>
        <input type="password" placeholder="********" />

        <div className="forgot">Forgot Password?</div>

        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  );
}

export default Login;