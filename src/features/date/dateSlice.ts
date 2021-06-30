import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface DayInfo {
  today: number;
  month: string;
  day: string;
}

interface calendarState {
  show: boolean;
  selectDate: string;
  dayInfo: DayInfo;
}

const initialState: calendarState = {
  show: false,
  selectDate: '',
  dayInfo: {
    today: 0,
    month: '',
    day: ''
  }
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    handleCalendar: (state) => {
      state.show = !state.show;
    },
    handleDate: (state, action: PayloadAction<string>) => {
      state.selectDate = action.payload;
    },
    handleDayInfo: (state, action) => {
      state.dayInfo = action.payload;
    }
  }
});

export const { handleCalendar, handleDate, handleDayInfo } = dateSlice.actions;

export const date = (state: RootState) => state.date;

export default dateSlice.reducer;
