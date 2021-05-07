import React, { useState } from "react";
import { ErrorContext } from "./ErrorContext";

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const setErrorMessage = (msg, timed) => {
    setError(msg);

    if (timed) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const clearErrorMessage = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider
      value={{ error, setErrorMessage, clearErrorMessage }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
