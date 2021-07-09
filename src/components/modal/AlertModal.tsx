import React from 'react';
import './AlertModal.scss';
import ModalTemplate from './ModalTemplate';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { handleModal } from '../../features/modal/modalSlice';

const Alert: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalType = useAppSelector((state) => state.showModal.type);

  const handleRefresh = () => {
    history.go(-1);
    //console.log(history);
    //window.location.reload();
    //location.href = document.referrer;
    //dispatch(handleModal({ show: false, type: '' }));
  };

  const renderAlert = () => {
    return (
      <div className="alert_message_container">
        <p>다시 한 번 확인해주세요.</p>
        <button
          className="alert_btn"
          onClick={() => dispatch(handleModal({ show: false, type: '' }))}
        >
          Ok!
        </button>
      </div>
    );
  };

  const renderConfirm = () => {
    return (
      <div className="alert_message_container">
        <p>모든 정보가 삭제 됩니다.</p>
        <div className="confirm_btn_container">
          <button className="confirm_btn" onClick={() => handleRefresh()}>
            Ok!
          </button>
          <button
            className="confirm_btn"
            onClick={() => dispatch(handleModal({ show: false, type: '' }))}
          >
            No!
          </button>
        </div>
      </div>
    );
  };

  return (
    <ModalTemplate>
      <div className="alert_wrap">
        <div className="alert_message_wrap">
          <button
            className="modal_off_btn"
            onClick={() => dispatch(handleModal({ show: false, type: '' }))}
          >
            x
          </button>
          <div className="alert_header_container">
            <h1 className="alert_header">Invalid!</h1>
            <hr></hr>
          </div>
          {modalType === 'alert' && renderAlert()}
          {modalType === 'confirm' && renderConfirm()}
        </div>
      </div>
    </ModalTemplate>
  );
};

export default Alert;
