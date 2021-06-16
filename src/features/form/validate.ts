import { formInterface } from './form.model';

export default function validate(values: formInterface): formInterface {
  let errors: formInterface = {
    email: '',
    password: '',
    password2: ''
  };

  if (
    values.email.length > 0 &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = '이메일 형식이 맞지 않습니다.';
  }

  if (values.password.length > 0 && values.password.length < 6) {
    errors.password = '비밀번호는 6자 이상입니다.';
  }

  if (values.password2.length > 0 && values.password2 !== values.password) {
    errors.password2 = '비밀번호가 맞지 않습니다.';
  }

  return errors;
}
