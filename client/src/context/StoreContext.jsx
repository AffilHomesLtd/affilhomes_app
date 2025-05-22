/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
  });
  const [otpInput, setOtpInput] = useState('');

  const value = {
    user,
    setUser,
    otpInput,
    setOtpInput,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
