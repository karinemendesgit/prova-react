import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ResetPassword: React.FC = () => {
  return (
    <div>
      <Sidebar/>
      <div>
        <h3>Reset password</h3>
        <div>
          <div>
            <div>
            <input type="email" name="" id="" placeholder="Email" />
            </div>
          </div>
          <div>
            <h3>Send link</h3>
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

export default ResetPassword;