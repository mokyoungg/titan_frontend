import React from 'react';
import './SignUp.scss';
import AlertModal from './alert/AlertModal';

import useForm from '../features/form/useForm';

const SignUp: React.FC = () => {
  const { handleChange, handleSubmit, values, errors } = useForm();

  return (
    <div className="sign_up_wrap">
      <div className="sign_up_header_container">
        <h1 className="sign_up_header">Welcome!</h1>
        <hr className="sign_up_line" />
      </div>
      <div className="sign_up_container">
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
            value={values.password}
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error_message">{errors.password}</p>
          )}
        </div>
        <div className="input_container">
          <input
            name="password2"
            type="password"
            value={values.password2}
            placeholder="Enter your Password Again"
            onChange={handleChange}
          />
          {errors.password2 && (
            <p className="error_message">{errors.password2}</p>
          )}
        </div>
        <button className="sign_up_btn" onClick={() => handleSubmit('sign_up')}>
          Continue
        </button>
      </div>
      <AlertModal />
    </div>
  );
};

export default SignUp;

// 뒤로가기 버튼 클릭시, 페이지 새로고침을 위한 코드
// useEffect(() => {
//   history.pushState(null, document.title, location.href);
//   window.addEventListener('popstate', (event) => {
//     // alert('모든 데이터가 삭제됩니다.');
//     dispatch(handleModal({ show: true, type: 'confirm' }));
//     // window.location.reload();
//     //history.pushState(null, document.title, location.href);
//   });
// }, []);

// onChange 함수와 redux 사용 코드
// <input
// name="password2"
// type="password"
// value={userInfo.password2}
// placeholder="Enter your Password Again"
// onChange={(event) =>
//   dispatch(
//     makeUserInfo({
//       name: event.target.name,
//       value: event.target.value,
//     }),
//   )
// }
// />
