export const inputHandler = (e, index, inputsRef, updateOtpValue) => {
  const value = e.target.value;
  if (value.length > 0 && index < inputsRef.current.length - 1) {
    inputsRef.current[index + 1].focus();
  }
  updateOtpValue();
};

export const keydownHandler = (e, index, inputsRef, updateOtpValue) => {
  if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
    inputsRef.current[index - 1].focus();
  }
  updateOtpValue();
};

export const pasteHandler = (e, inputsRef, updateOtpValue) => {
  e.preventDefault();
  const paste = e.clipboardData.getData('text').slice(0, 6);
  paste.split('').forEach((char, index) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index].value = char;
    }
  });
  updateOtpValue();
};
