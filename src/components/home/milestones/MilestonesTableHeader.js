import React from "react";

const MilestonesTableHeader = ({ component }) => {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        style={{
          width: "85%",
          margin: "0 auto 1rem",
        }}
      >
        Input your new practice and define a goal for the amount of times you
        wish to complete it per week. Check off each day you perform the
        practice.
      </div>
      {component}
    </div>
  );
};

export default MilestonesTableHeader;
