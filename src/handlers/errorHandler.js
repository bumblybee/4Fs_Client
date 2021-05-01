const errorCodeToMessage = {
  "auth.invalidCredentials":
    "Invalid Credentials. Check credentials and try again.",
  "auth.existingCredentials":
    "Looks like you already have an account. Please log in.",
  "auth.noToken":
    "Token not found or has expired. Try resetting your password again.",
};

// Pass array of errors to handleErrors fn
const handleErrorsArray = (array) => {
  const errors = array.map(handleErrors);
  return errors;
};

// Return error message
const handleErrors = (errorCode) => {
  const errorMessage = errorCodeToMessage[errorCode];

  if (errorMessage) {
    return { error: errorMessage };
  }

  return {
    error: "Uh-oh, something is unexpectedly broken. Please contact support.",
  };
};

export { handleErrors, handleErrorsArray };
