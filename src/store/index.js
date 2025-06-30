import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    course: courseReducer,
    ui: uiReducer,
  },
});