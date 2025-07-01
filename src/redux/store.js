import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import otpReducer from './slices/otpSlice';
import loaderReducer from './slices/loaderSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpReducer,
    loaders: loaderReducer,
  },
});
