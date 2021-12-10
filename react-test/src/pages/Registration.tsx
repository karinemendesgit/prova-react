import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Registration: React.FC = () => {
  return (
    <div>
      <Sidebar/>
      <div>
        <h3>Registration</h3>
        <div>
          <div>
            <div>
              <input type="text" name="" id="" placeholder="Name"/>
            </div>
            <div>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div>
              <input type="password" name="" id="" placeholder="Password"/>
            </div>
          </div>
          <div>
            <h3>Register</h3>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <Link to="/">
            <img src="" alt="" />
            <h3>Back</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;