import React, { useState } from "react";
import { ErrorContext } from "./ErrorContext";

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const setErrorMessage = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  return (
    <ErrorContext.Provider value={{ error, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
