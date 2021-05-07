import React from "react";
import Accomplishments from "./Accomplishments";
import Moments from "./Moments";
import Skills from "./Skills";
import SectionHeader from "../../layout/SectionHeader";

// Todo: Add skills table
const SwaggerStockpile = () => {
  return (
    <div>
      <SectionHeader
        title="Swagger Stockpile"
        subtitle="Make a list for each category. Write down anything that comes to mind.
        Capture both small and big wins. This will be your stockpile that you
        can reference at any time in order to keep you on your path to success."
      />

      <h4
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          marginTop: "-2.5rem",
        }}
      >
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
        <Skills />
      </div>
    </div>
  );
};

export default SwaggerStockpile;
