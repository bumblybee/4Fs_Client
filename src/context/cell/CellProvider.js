import React, { useState, useContext } from "react";
import { CellContext } from "./CellContext";

const CellProvider = ({ children }) => {
  const [shiftCell, setShiftCell] = useState(false);

  return (
    <CellContext.Provider value={{ shiftCell, setShiftCell }}>
      {children}
    </CellContext.Provider>
  );
};

export default CellProvider;
