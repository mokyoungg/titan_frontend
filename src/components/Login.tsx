import React, { useEffect } from 'react';
import './Login.scss';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { makeUserInfo } from '../features/form/userInfoSlice';

const Login: React.FC = () => {
  const userInfo = useAppSelector((state) => state.userInfo.info);
  const errMessage = useAppSelector((state) => state.userInfo.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('popstate', (event) => {
      alert('모든 데이터가 삭제됩니다.');
      window.location.reload();
    });
  }, []);

  const handleSubmit = () => {
    let value = false;
    let error = true;

    for (let key in userInfo) {
      if (key === 'password2') {
        value = true;
      } else {
        // console.log(userInfo[key]);
        if (userInfo[key].length > 0) {
          value = true;
        } else {
          value = false;
          break;
        }
      }
    }

    for (let key in errMessage) {
      if (key === 'password2') {
        error = false;
      } else {
        if (errMessage[key].length > 0) {
          error = true;
          break;
        } else {
          error = false;
        }
      }
    }

    if (value && !error) {
      console.log(userInfo);
    } else {
      alert('다시 한번 확인해주세요');
    }
  };

  return (
    <div className="login_wrap">
      <div className="login_header_container">
        <h1 className="login_header">Hello,</h1>
        <hr className="login_line"></hr>
      </div>
      <div className="login_container">
        <div className="input_container">
          <input
            name="email"
            type="text"
            placeholder="Enter your Email"
            autoComplete="off"
            onChange={(event) =>
              dispatch(
                makeUserInfo({
                  name: event.target.name,
                  value: event.target.value,
                }),
              )
            }
          />
          <p className="error_message">{errMessage.email}</p>
        </div>
        <div className="input_container">
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={(event) =>
              dispatch(
                makeUserInfo({
                  name: event.target.name,
                  value: event.target.value,
                }),
              )
            }
          />
          <p className="error_message">{errMessage.password}</p>
        </div>
        <button className="login_btn" onClick={() => handleSubmit()}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;
