import React from "react";
import Accomplishments from "./Accomplishments";
import Moments from "./Moments";
import Skills from "./Skills";
import SectionHeader from "../../layout/SectionHeader";
import { StyledSwaggerTableContainer } from "./StyledSwagger";

// Todo: Add skills table
const SwaggerStockpile = () => {
  return (
    <div>
      <SectionHeader
        title="Swagger Stockpile"
        subtext="Make a list for each category. Write down anything that comes to mind.
        Capture both small and big wins. This will be your stockpile that you
        can reference at any time in order to keep you on your path to success."
        component={
          <h4
            style={{
              textAlign: "center",
              margin: "-1.75rem 0 2.5rem",
            }}
          >
            <em>"I Think. I Know. I Can. I Do."</em>
          </h4>
        }
      />

      <StyledSwaggerTableContainer>
        <Moments />
        <Accomplishments />
        <Skills />
      </StyledSwaggerTableContainer>
    </div>
  );
};

export default SwaggerStockpile;
