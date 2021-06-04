import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import ShareToggle from "../../layout/share/ShareToggle";
import Accomplishments from "./Accomplishments";
import Moments from "./Moments";
import Skills from "./Skills";
import SectionHeader from "../../layout/SectionHeader";
import {
  StyledSwaggerTableContainer,
  StyledSectionHeaderText,
} from "./StyledSwagger";

// Todo: Add skills table
const SwaggerStockpile = () => {
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);

  return (
    <div>
      <SectionHeader
        title="Swagger Stockpile"
        subtext="Make a list for each category. Write down anything that comes to mind.
        Capture both small and big wins. This will be your stockpile that you
        can reference at any time in order to keep you on your path to success."
        component={
          <StyledSectionHeaderText>
            <em>"I Think. I Know. I Can. I Do."</em>
          </StyledSectionHeaderText>
        }
      />
      <ShareToggle
        shared={shared[0]}
        handleSave={handleSaveShared}
        field="swagger"
        width="89.5%"
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
