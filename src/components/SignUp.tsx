import React from 'react';
import './SignUp.scss';

const SignUp: React.FC = () => {
  return (
    <div className="sign_up_wrap">
      <div className="sign_up_header_container">
        <h1 className="sign_up_header">Welcome!</h1>
        <hr className="sign_up_line" />
      </div>
      <div className="sign_up_container">
        <div className="input_container">
          <input type="text" placeholder="Enter your Email" />
          <p className="error_message">Invalid Email</p>
        </div>
        <div className="input_container">
          <input type="password" placeholder="Enter your Password" />
          <p className="error_message">Invalid Password</p>
        </div>
        <div className="input_container">
          <input type="password" placeholder="Enter your Password Again" />
          <p className="error_message">Invalid Password</p>
        </div>
        <button className="sign_up_btn">Continue</button>
      </div>
    </div>
  );
};

export default SignUp;
