// redux/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photo: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { setPhoto } = profileSlice.actions;
export default profileSlice.reducer;
