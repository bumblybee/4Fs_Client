const errorCodeToMessage = {
  "auth.invalidCredentials":
    "Invalid Credentials. Check credentials and try again, or create an account if you haven't already.",
  "auth.existingCredentials":
    "Looks like you already have an account. Please log in.",
  "auth.existingEmail": "Email address already in use.",
  "email must be unique": "Email address already in use",
  "auth.noToken":
    "Password reset link has expired. Please reset your password again from the login page.",
  "No authorization token was found": "Your session has expired.",
  "user.unauthorized": "Your session has expired.",
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
