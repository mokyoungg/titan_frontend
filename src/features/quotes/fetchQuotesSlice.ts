import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type QuotesType = {
  text: string,
  author: string | null
};

type FetchQuotesError = {
  message: string
}

// First, create the thunk
export const fetchQuotes = createAsyncThunk<QuotesType, number,{rejectValue: FetchQuotesError}>(
  'fetchQuotes',

  //rejectWithValue를 위해 필요없는 파라미터 '_'를 사용함
  //이게 없으면 rejectWithValue는 void 형식의 오류를 발생시킨다.
  async (number, thunkApi) => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data: QuotesType[] = await response.json();
      return data[number]

    } catch(err) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch Quotes'
      })
     
    }

  }
);



type QuotesDataState = {
  quotes: QuotesType,
  status: 'loading' | 'idle',
  error: string | null
};

const initialState = {
    quotes: {},
    error: null,
    status: 'idle'
// eslint-disable-next-line prettier/prettier
} as QuotesDataState

const fetchQuotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
  
    // When we send a request,
    // fetchQuotes.pending is being fired:
    builder.addCase(fetchQuotes.pending, (state) => {
      state.status = 'loading';
      state.error = null
    })

    // When a sercer responses with the data,
    // 'fetchQuotes.fulfilled' is firderd
    builder.addCase(fetchQuotes.fulfilled, (state, {payload}) => {
      //console.log('quotes', payload)
      state.quotes = payload;
      state.status = 'idle'
    })

     // When a server responses with an error:
     builder.addCase(fetchQuotes.rejected, (state, { payload }) => {
      console.log(payload)
     })
  }
})

export const selectQuotes = (state: RootState) => state.quotes;

export default fetchQuotesSlice.reducer;