import React from "react";
import rigthArrow from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div>
      <div>
        <h3>Authentication</h3>
        <div>
          <div>
            <div>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div>
              <input type="password" name="" id="" placeholder="Password"/>
            </div>
          </div>
          <Link to="/reset-password">
            <p>I forget my password</p>
          </Link>
          <div>
            <h3>Log In</h3>
            <img src="" alt="lime-green right-arrow" />
          </div>
        </div>
        <div>
          <Link to="/register">
            <h3>Sign Up</h3>
            <img src={rigthArrow} alt="right-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;