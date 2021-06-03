import React from "react";

const SectionHeader = ({ title, subtext, component }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          textAlign: "center",
          margin: "0 auto 2rem",
          fontSize: "1.2rem",
          fontWeight: "500",
          width: "60%",
          color: "#333333",
        }}
      >
        {subtext}
      </p>

      {component}
    </div>
  );
};

export default SectionHeader;
