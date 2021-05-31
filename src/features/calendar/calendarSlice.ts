import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface calendarState {
  show: boolean;
  today: any;
}

const initialState: calendarState = {
  show: false,
  today: []
};

export const calendarSlice = createSlice({
  name: 'showCalendar',
  initialState,
  reducers: {
    handleCalendar: (state) => {
      state.show = !state.show;
    }
  }
});

export const { handleCalendar } = calendarSlice.actions;

export const calendar = (state: RootState) => state.showCalendar;

export default calendarSlice.reducer;
