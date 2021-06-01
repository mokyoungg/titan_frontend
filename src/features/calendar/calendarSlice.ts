import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface calendarState {
  show: boolean;
  selectDate: string;
}

const initialState: calendarState = {
  show: false,
  selectDate: ''
};

export const calendarSlice = createSlice({
  name: 'handleCalendar',
  initialState,
  reducers: {
    showCalendar: (state) => {
      state.show = !state.show;
    },
    handleDate: (state, action: PayloadAction<string>) => {
      state.selectDate = action.payload;
    }
  }
});

export const { showCalendar, handleDate } = calendarSlice.actions;

export const calendar = (state: RootState) => state.handleCalendar;

export default calendarSlice.reducer;
