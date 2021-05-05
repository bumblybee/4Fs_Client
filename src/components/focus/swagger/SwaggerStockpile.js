import React from "react";
import Accomplishments from "./Accomplishments";

const SwaggerStockpile = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Swagger Stockpile</h1>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto 0.5rem",
          fontSize: "1.1rem",
          width: "65%",
        }}
      >
        Make a list for each category. Write down anything that comes to mind.
        Capture both small and big wins. This will be your stockpile that you
        can reference at any time in order to keep you on your path to success.
      </p>
      <h4 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "0" }}>
        "I Think. I Know. I Can. I Do."
      </h4>
      <Accomplishments />
    </div>
  );
};

export default SwaggerStockpile;
