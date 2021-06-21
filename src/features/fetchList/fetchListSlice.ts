import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { ListInterface } from './list.model';

interface fetchList {
  totalList: ListInterface[];
  selectList: ListInterface | any;
}

const initialState: fetchList = {
  totalList: [],
  selectList: {}
};

export const fetchListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    handleList: (state, action) => {
      state.totalList = action.payload;
    }
  }
});

export const { handleList } = fetchListSlice.actions;

export const list = (state: RootState) => state.list;

export default fetchListSlice.reducer;
