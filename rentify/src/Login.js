import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className="login__head">
        <div className="login">
          <h1 className="login__title">Login</h1>
          <div className="login__username">
            <label className="username">Username</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
          <div className="login__password">
            <label className="password">Password</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your Password"
            />
            <label className="forgot">Forgot Password?</label>
            <div className="btn_login">
              <p className="text">Login</p>
            </div>
            <div
              onClick={() => history.push("/register")}
              className="btn_signup"
            >
              Not a member?Signup now
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
