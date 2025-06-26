import { createSlice } from '@reduxjs/toolkit';

const initialState = { sendOtp: false, verifyOtp: false };

const loaderSlice = createSlice({
  name: 'loaders',
  initialState,
  reducers: {
    setSendOtpLoader: (state, action) => {
      state.sendOtp = action.payload;
    },
    setVerifyOtpLoader: (state, action) => {
      state.verifyOtp = action.payload;
    },
  },
});

export const { setSendOtpLoader, setVerifyOtpLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
