import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface List {
  id: number;
  date: string;
  emotion: string;
  content: string[];
}

interface Answer {
  '내가 감사하게 생각하는 것들': string[];
  '오늘을 기분좋게 만들어주는 것은?': string[];
  '오늘의 다짐': string[];
}

interface Diary {
  emotion: string;
  questionList: string[];
  list: List[];
  answer: Answer;
}

interface AnswerQuestion {
  question: string;
  value: string;
}

const initialState: Diary = {
  emotion: 'great',
  questionList: [
    '내가 감사하게 생각하는 것들',
    '오늘을 기분좋게 만들어주는 것은?',
    '오늘의 다짐'
  ],
  list: [],
  answer: {
    '내가 감사하게 생각하는 것들': [''],
    '오늘을 기분좋게 만들어주는 것은?': [''],
    '오늘의 다짐': ['']
  }
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
    },
    handleAnswer: (state, action: PayloadAction<AnswerQuestion>) => {
      //console.log(action.payload);
      const { question, value } = action.payload;
      //console.log(question);
      //console.log(value);
      //console.log(value.split('\n'));
      state.answer = { ...state.answer, [question]: value.split('\n') };
    }
  }
});

export const { handleEmotion, handleList, handleAnswer } = diarySlice.actions;

export const diary = (state: RootState) => state.diary;

export default diarySlice.reducer;
