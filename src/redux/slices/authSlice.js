import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
