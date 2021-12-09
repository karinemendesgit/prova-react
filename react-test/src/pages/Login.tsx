import React from "react";
import rigthArrow from "../assets/right-arrow.svg";

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
          <p>I forget my password</p>
          <div>
            <h3>Log In</h3>
            <img src="" alt="lime-green right-arrow" />
          </div>
        </div>
        <div>
          <h3>Sign Up</h3>
          <img src={rigthArrow} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Login;