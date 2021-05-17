import React from 'react';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <div className="login_wrap">
      <div className="login_header_container">
        <h1 className="login_header">Hello,</h1>
        <hr className="login_line"></hr>
      </div>
      <div className="login_container">
        <div className="input_container">
          <input type="text" placeholder="Enter your Email" />
          <p className="error_message">Invalid Email</p>
        </div>
        <div className="input_container">
          <input type="password" placeholder="Enter your Password" />
          <p className="error_message">Invalid Password</p>
        </div>
        <button className="login_btn">Continue</button>
      </div>
    </div>
  );
};

export default Login;
