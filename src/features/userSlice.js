import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: () => {},
  },
});

export const { logIn, logout } = userSlice.actions;
export const successFullLogin = (state) => state.user.isLoggedIn;
export default userSlice.reducer;
