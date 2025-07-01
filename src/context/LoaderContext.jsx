/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSendOtpLoader,
  setVerifyOtpLoader,
} from '../redux/slices/loaderSlice';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const dispatch = useDispatch();
  const loaders = useSelector((state) => state.loaders);

  useEffect(() => {
    if (loaders.sendOtp) {
      const timer = setTimeout(() => {
        dispatch(setSendOtpLoader(false));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loaders.sendOtp, dispatch]);

  useEffect(() => {
    if (loaders.verifyOtp) {
      const timer = setTimeout(() => {
        dispatch(setVerifyOtpLoader(false));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loaders.verifyOtp, dispatch]);

  return <LoaderContext.Provider value={{}}>{children}</LoaderContext.Provider>;
};

export const useLoader = () => useContext(LoaderContext);
