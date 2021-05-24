import React from 'react';
import './SignUp.scss';
import AlertModal from './alert/AlertModal';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { makeUserInfo } from '../features/form/userInfoSlice';
import { handleModal } from '../features/modal/modalSlice';

const SignUp: React.FC = () => {
  const userInfo = useAppSelector((state) => state.userInfo.info);
  const errMessage = useAppSelector((state) => state.userInfo.error);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    let value = false;
    let error = true;

    for (let key in userInfo) {
      // console.log(userInfo[key]);
      if (userInfo[key].length > 0) {
        value = true;
      } else {
        value = false;
        break;
      }
    }

    for (let key in errMessage) {
      if (errMessage[key].length > 0) {
        error = true;
        break;
      } else {
        error = false;
      }
    }

    console.log('value :', value);
    console.log('err :', error);

    if (value && !error) {
      console.log(userInfo);
    } else {
      // alert('다시 한번 확인해주세요');
      dispatch(handleModal({ show: true, type: 'alert' }));
    }
  };

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
            value={userInfo.email}
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
            value={userInfo.password}
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
        <div className="input_container">
          <input
            name="password2"
            type="password"
            value={userInfo.password2}
            placeholder="Enter your Password Again"
            onChange={(event) =>
              dispatch(
                makeUserInfo({
                  name: event.target.name,
                  value: event.target.value,
                }),
              )
            }
          />
          <p className="error_message">{errMessage.password2}</p>
        </div>
        <button className="sign_up_btn" onClick={() => handleSubmit()}>
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
