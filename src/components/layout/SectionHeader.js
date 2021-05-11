import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h1>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto 3rem",
          fontSize: "1.2rem",
          fontWeight: "500",
          width: "65%",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
