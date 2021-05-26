import React from "react";

const SectionHeader = ({ title, subtitle, subtext, component }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "0.25rem" }}>{title}</h1>
      <h3
        style={{
          textAlign: "center",
          margin: subtext ? "0 auto 0.75rem" : "0 auto",
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </h3>
      <p
        style={{
          textAlign: "center",
          margin: component ? "0 auto 1.5rem" : "0 auto 2.5rem",
          fontSize: "1.2rem",
          fontWeight: "500",
          width: "65%",
        }}
      >
        {subtext}
      </p>
      {component}
    </div>
  );
};

export default SectionHeader;
