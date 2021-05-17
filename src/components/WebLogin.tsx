import React from 'react';
import './WebLogin.scss';

const Login: React.FC = () => {
  const clickHandler = () => {
    console.log('click');
  };

  return (
    <div className="login_wrap">
      <div className="login_container">
        <div className="login_section">
          <h2>Login</h2>
          <div className="login_input_section">
            <div className="login_input_container">
              <label>Eamil</label>
              <input type="text" placeholder="Enter your Email" />
              <p className="error_message">잘못된 이메일입니다.</p>
            </div>
            <div className="login_input_container">
              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />
              <p className="error_message">잘못된 이메일입니다.</p>
            </div>
            <div className="login_button_container">
              <button onClick={clickHandler}>Login</button>
            </div>
          </div>
        </div>
        <div className="img_section">
          <img src="https://source.unsplash.com/featured/?pattern" />
        </div>
      </div>
    </div>
  );
};

export default Login;
