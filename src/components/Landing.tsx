import React from 'react';
import './Landing.scss';

const Landing: React.FC = () => {
  return (
    <div className="landing_wrap">
      {/* <div className="triangle_one"></div> */}
      <div className="landing_header_section">
        <h1 className="landing_header">
          Tools
          <br />
          of
          <br />
          Titan
        </h1>
        <hr className="landing_line"></hr>
      </div>
      <div className="landing_btn_section">
        <button className="login_btn">Login</button>
        <button className="sign_up_btn">Create Account</button>
      </div>
      <div className="triangle_two"></div>
    </div>
  );
};

export default Landing;
