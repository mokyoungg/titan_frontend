import React from 'react';
import ReactDOM from 'react-dom';
import './ModalTemplate.scss';

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { handleModal } from "../../features/modal/modalSlice"

// eslint-disable-next-line prettier/prettier
const modalPortal = document.querySelector('#modal')!

const ModalTemplate: React.FC = ({ children }) => {
  const showModal = useAppSelector((state) => state.showModal.show);
  const dispatch = useAppDispatch();


  if(!showModal){
    return null
  } else {
  return ReactDOM.createPortal(
    <div className='modal_wrap' >{children}</div>,
    modalPortal
  )
  }
};

export default ModalTemplate;
