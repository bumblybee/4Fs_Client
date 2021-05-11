import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import { StyledExampleRow, StyledTooltipContainer } from "./StyledExampleRow";

const ExampleRowCell = ({ val, tooltipContent }) => {
  return (
    <StyledExampleRow>
      {val}
      {tooltipContent && (
        <StyledTooltipContainer>
          <Popup
            position="top center"
            content={tooltipContent}
            trigger={<Icon name="question circle outline" />}
          />
        </StyledTooltipContainer>
      )}
    </StyledExampleRow>
  );
};

export default ExampleRowCell;
