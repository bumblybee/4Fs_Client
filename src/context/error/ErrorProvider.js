import React, { useState } from "react";
import { ErrorContext } from "./ErrorContext";

const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const setError = (msg) => {
    setErrorMessage(msg);
    setTimeout(() => {
      setErrorMessage(null);
    }, 3500);
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
