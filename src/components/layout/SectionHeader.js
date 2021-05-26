import React from "react";

const SectionHeader = ({ title, subtitle, component }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "0.5rem" }}>{title}</h1>
      <p
        style={{
          textAlign: "center",
          margin: component ? "0 auto 1rem" : "0 auto 2.5rem",
          fontSize: "1.2rem",
          fontWeight: "500",
          width: "65%",
        }}
      >
        {subtitle}
      </p>
      {component}
    </div>
  );
};

export default SectionHeader;
