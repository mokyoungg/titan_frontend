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

export const calendarSlice = createSlice({
  name: 'handleCalendar',
  initialState,
  reducers: {
    showCalendar: (state) => {
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

export const {
  showCalendar,
  handleDate,
  handleDayInfo
} = calendarSlice.actions;

export const calendar = (state: RootState) => state.handleCalendar;

export default calendarSlice.reducer;
