import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import { StyledExampleRow, StyledTooltipContainer } from "./StyledExampleRow";

const ExampleRowCell = ({
  val,
  tooltipContent,
  alignment,
  justify,
  textWeight,
  width,
}) => {
  return (
    <StyledExampleRow
      textWeight={textWeight}
      alignment={alignment}
      justify={justify}
      width={width}
    >
      <div>{val}</div>
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
