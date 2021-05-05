import React from "react";
import Accomplishments from "./Accomplishments";
import Moments from "./Moments";

// Todo: Add skills table
const SwaggerStockpile = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Swagger Stockpile</h1>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto 0.5rem",
          fontSize: "1.2rem",
          width: "65%",
        }}
      >
        Make a list for each category. Write down anything that comes to mind.
        Capture both small and big wins. This will be your stockpile that you
        can reference at any time in order to keep you on your path to success.
      </p>
      <h4 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "0" }}>
        <em>"I Think. I Know. I Can. I Do."</em>
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Moments />
        <Accomplishments />
      </div>
    </div>
  );
};

export default SwaggerStockpile;
