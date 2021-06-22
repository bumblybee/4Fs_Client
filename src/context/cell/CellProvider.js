import React, { useState, useContext } from "react";
import { CellContext } from "./CellContext";

const CellProvider = ({ children }) => {
  const [focusNextCell, setFocusNextCell] = useState(false);

  return (
    <CellContext.Provider value={{ focusNextCell, setFocusNextCell }}>
      {children}
    </CellContext.Provider>
  );
};

export default CellProvider;
