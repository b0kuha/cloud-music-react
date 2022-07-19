import { configureStore } from '@reduxjs/toolkit';
import recommendReducer from './slice/recommend';

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
});

export default store;
