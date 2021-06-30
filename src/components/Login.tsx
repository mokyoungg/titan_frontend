import React, { useState } from 'react';
import './Login.scss';
import AlertModal from './modal/AlertModal';

import useForm from '../features/form/useForm';

const Login: React.FC = () => {
  const { handleChange, handleSubmit, values, errors } = useForm();

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
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error_message">{errors.email}</p>}
        </div>
        <div className="input_container">
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error_message">{errors.password}</p>
          )}
        </div>
        <button className="login_btn" onClick={() => handleSubmit('login')}>
          Continue
        </button>
      </div>
      <AlertModal />
    </div>
  );
};

export default Login;

// 뒤로가기 버튼 클릭시, 새로고침을 위한 코드
// useEffect(() => {
//   history.pushState(null, document.title, location.href);
//   window.addEventListener('popstate', (event) => {
//     // alert('모든 데이터가 삭제됩니다.');
//     dispatch(handleModal({ show: true, type: 'confirm' }));
//     // window.location.reload();  //브라우저 새로고침(강제)
//     //history.pushState(null, document.title, location.href);
//   });
// }, []);
