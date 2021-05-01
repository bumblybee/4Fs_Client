import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "../fTabBar/FTabBar";
import SectionTabMenu from "../sectionTabMenu/SectionTabMenu";
import TableContainer from "../table/TableContainer";

const AppWrapper = ({ children }) => {
  return (
    <div>
      <NavBar />
      <FTabBar />
      <SectionTabMenu />
      <TableContainer>{children}</TableContainer>
    </div>
  );
};

export default AppWrapper;
