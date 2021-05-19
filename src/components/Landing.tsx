import React from 'react';
import './Landing.scss';

import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="landing_wrap">
      {/* <div className="triangle_one"></div> */}
      <div className="landing_header_section">
        <h1 className="landing_header">
          Tools of
          <br />
          Titan
        </h1>
        <hr className="landing_line"></hr>
      </div>
      <div className="landing_btn_section">
        <Link to="/login">
          <button className="login_btn">Login</button>
        </Link>
        <Link to="/sign_up">
          <button className="sign_up_btn">Create Account</button>
        </Link>
      </div>
      <div className="triangle_two"></div>
    </div>
  );
};

export default Landing;
