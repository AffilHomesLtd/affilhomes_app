import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: '',
  reducers: {
    setOtpInput: (state, action) => action.payload,
  },
});

export const { setOtpInput } = otpSlice.actions;
export default otpSlice.reducer;
