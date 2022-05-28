import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user';
import recommendReducer from './slice/recommend';

const store = configureStore({
  reducer: {
    user: userReducer,
    recommend: recommendReducer,
  },
});

export default store;
