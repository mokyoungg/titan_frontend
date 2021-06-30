import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { DiaryData } from './diary.model';

interface AnswerToQuestion {
  question: string;
  value: string;
}

const initialState: DiaryData = {
  emotion: 'great',
  questionList: [
    '내가 감사하게 생각하는 것들',
    '오늘을 기분좋게 만들어주는 것은?',
    '오늘의 다짐'
  ],
  //list: [],
  answerList: {
    '내가 감사하게 생각하는 것들': ['1. '],
    '오늘을 기분좋게 만들어주는 것은?': ['1. '],
    '오늘의 다짐': ['1. ']
  }
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    handleEmotion: (state, action) => {
      state.emotion = action.payload;
    },
    handleAnswer: (state, action: PayloadAction<AnswerToQuestion>) => {
      const { question, value } = action.payload;

      state.answerList = {
        ...state.answerList,
        [question]: value.split('\n')
      };
    }
  }
});

export const { handleEmotion, handleAnswer } = diarySlice.actions;

export const diary = (state: RootState) => state.diary;

export default diarySlice.reducer;
