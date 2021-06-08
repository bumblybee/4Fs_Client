const errorCodeToMessage = {
  "auth.invalidCredentials":
    "Invalid Credentials. Check credentials and try again, or create an account if you haven't already.",
  "auth.existingCredentials":
    "Looks like you already have an account. Please log in.",
  "auth.noToken":
    "Password reset link has expired. Please reset your password again from the login page.",
  "No authorization token was found":
    "Uh-oh, looks like you're logged out. Please refresh the page and log in.",
  "user.unauthorized":
    "Uh-oh, looks like you aren't logged in. Please refresh the page and log in.",
  "user.invalidEmailFormat": "Please check the email address formatting.",
  "practices.invalidDate": "Date must fall on or after today.",
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
    error:
      "Uh-oh, something is unexpectedly broken. Please contact support if the problem persists.",
  };
};

export { handleErrors, handleErrorsArray };
