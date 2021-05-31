import React, { useState } from 'react';
import validate from './validate';
import { formInterface } from './form.model';
import { useAppDispatch } from '../../app/hooks';
import { handleModal } from '../modal/modalSlice';

const useForm = () => {
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<formInterface>({
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState<formInterface>({
    email: '',
    password: '',
    password2: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = { ...values, [name]: value };

    setValues(newValue);
    setErrors(validate(newValue));
  };

  const checkState = (state: boolean, obj: formInterface, type: string) => {
    for (let key in obj) {
      if (type === 'login' && key === 'password2') {
        break;
      } else {
        if (obj[key].length > 0) {
          state = true;
        } else {
          state = false;
          break;
        }
      }
    }
    return state;
  };

  const handleSubmit = (type: string) => {
    let valueChk = false;
    let errorChk = true;

    valueChk = checkState(valueChk, values, type);
    errorChk = checkState(errorChk, errors, type);

    if (valueChk && !errorChk) {
      console.log(values);
    } else {
      dispatch(handleModal({ show: true, type: 'alert' }));
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
