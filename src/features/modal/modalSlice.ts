import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface modalState {
  show: boolean;
  type: string;
}

const initialState: modalState = {
  show: false,
  type: ''
};

export const modalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    handleModal: (state, action: PayloadAction<modalState>) => {
      state.show = action.payload.show;
      state.type = action.payload.type;
    }
  }
});

export const { handleModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.showModal;

export default modalSlice.reducer;
