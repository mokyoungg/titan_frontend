import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

type Emotion = {
  emotion: string
};

const initialState: Emotion = {
  emotion: 'great'
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    handleEmotion: (state, action) => {
      //console.log('state: ', state);
      //console.log('action: ', action);
      state.emotion = action.payload;
    }
  }
});

export const { handleEmotion } = diarySlice.actions;

export const diary = (state: RootState) => state.diary;

export default diarySlice.reducer;
