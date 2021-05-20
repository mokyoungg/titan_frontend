import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { valuesInterface, errorsInterface } from './form.model';

import validate from './validate';

interface userInfoState {
  info: valuesInterface;
  error: errorsInterface;
}

interface info {
  name: string;
  value: string;
}

const initialState: userInfoState = {
  info: {
    email: '',
    password: '',
    password2: '',
  },
  error: {
    email: '',
    password: '',
    password2: '',
  },
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    makeUserInfo: (state, action: PayloadAction<info>) => {
      const { name, value } = action.payload;
      state.info = { ...state.info, [name]: value };

      let errorMessage = validate(state.info);

      state.error = errorMessage;
    },
  },
});

export const { makeUserInfo } = userInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;
