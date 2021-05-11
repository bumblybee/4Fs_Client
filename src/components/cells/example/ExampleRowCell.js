import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import { StyledExampleRow, StyledTooltipContainer } from "./StyledExampleRow";

const ExampleRowCell = ({ val, tooltipContent, alignment, textWeight }) => {
  return (
    <StyledExampleRow textWeight={textWeight}>
      {val}
      {tooltipContent && (
        <StyledTooltipContainer alignment={alignment}>
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
