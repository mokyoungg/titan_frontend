import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { ListInterface } from './list.model';

interface fetchList {
  totalList: ListInterface[];
  selectDiary: ListInterface | any;
}

const initialState: fetchList = {
  totalList: [],
  selectDiary: {}
};

export const fetchListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    handleTotalList: (state, action) => {
      state.totalList = action.payload;
    },
    handleSelectDiary: (state, action) => {
      state.selectDiary = action.payload;
    }
  }
});

export const { handleTotalList, handleSelectDiary } = fetchListSlice.actions;

export const list = (state: RootState) => state.list;

export default fetchListSlice.reducer;
