import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface List {
  id: number;
  date: string;
  emotion: string;
  content: string[];
}

interface Diary {
  emotion: string;
  questionList: string[];
  list: List[];
}

const initialState: Diary = {
  emotion: 'great',
  questionList: [
    '내가 감사하게 생각하는 것들',
    '오늘을 기분좋게 만들어주는 것은?',
    '오늘의 다짐'
  ],
  list: []
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    handleEmotion: (state, action) => {
      //console.log('state: ', state);
      //console.log('action: ', action);
      state.emotion = action.payload;
    },
    handleList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { handleEmotion, handleList } = diarySlice.actions;

export const diary = (state: RootState) => state.diary;

export default diarySlice.reducer;
