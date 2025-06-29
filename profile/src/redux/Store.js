// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './ProfileSclice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
