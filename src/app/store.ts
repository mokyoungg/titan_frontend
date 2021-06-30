import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userInfoReducer from '../features/form/userInfoSlice';
import modalReducer from '../features/modal/modalSlice';
import quotesReducer from '../features/quotes/fetchQuotesSlice';
import dateReducer from '../features/date/dateSlice';
import weatherReducer from '../features/weather/fetchWeatherSlice';
import diaryReducer from '../features/diary/diarySlice';
import listReducer from '../features/fetchList/fetchListSlice';

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    showModal: modalReducer,
    quotes: quotesReducer,
    date: dateReducer,
    weather: weatherReducer,
    diary: diaryReducer,
    list: listReducer
  }
  //middleware: [...getDefaultMiddleware()]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// redux store reset(초기화)를 위한 코드

// import {
//   configureStore,
//   combineReducers,
//   Reducer,
//   AnyAction,
// } from '@reduxjs/toolkit';

// const combinedReducer = combineReducers({
//   userInfo: userInfoReducer,
//   showModal: modalReducer,

// });

// export type RootState = ReturnType<typeof combinedReducer>;

// const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
//   if (action.type === "userInfo/reset") {
//     // eslint-disable-next-line prettier/prettier
//     state = {} as RootState;
//   }
//   return combinedReducer(state, action);
// };

// export const store = configureStore({
//   reducer: rootReducer,

// });
