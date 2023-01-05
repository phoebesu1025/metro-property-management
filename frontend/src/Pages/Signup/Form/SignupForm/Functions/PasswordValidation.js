const PasswordValidation = (givenPassword, setPassValidate) => {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  const haveNumber = /\d/;
  if (givenPassword.length >= 8) {
    setPassValidate((preValue) => {
      return { ...preValue, lengthIsMore: true };
    });
  } else {
    setPassValidate((preValue) => {
      return { ...preValue, lengthIsMore: false };
    });
  }

  if (haveNumber.test(givenPassword)) {
    setPassValidate((preValue) => {
      return { ...preValue, containNumber: true };
    });
  } else {
    setPassValidate((preValue) => {
      return { ...preValue, containNumber: false };
    });
  }

  if (specialChars.test(givenPassword)) {
    setPassValidate((preValue) => {
      return { ...preValue, containSpecialChar: true };
    });
  } else {
    setPassValidate((preValue) => {
      return { ...preValue, containSpecialChar: false };
    });
  }
};

export default PasswordValidation;
