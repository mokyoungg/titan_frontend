import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { ListInterface } from './list.model';

interface fetchList {
  totalList: ListInterface[];
  selectList: ListInterface | any;
  todayList: ListInterface | any;
}

const initialState: fetchList = {
  totalList: [],
  selectList: {},
  todayList: {}
};

export const fetchListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    handleList: (state, action) => {
      state.totalList = action.payload;
    },
    handleSelectList: (state, action) => {
      //console.log('action', action);
      state.selectList = action.payload;
    },
    handleTodayList: (state, action) => {
      state.todayList = action.payload;
    }
  }
});

export const { handleList, handleSelectList } = fetchListSlice.actions;

export const list = (state: RootState) => state.list;

export default fetchListSlice.reducer;
