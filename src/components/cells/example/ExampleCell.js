import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import { StyledExampleCell, StyledTooltipContainer } from "./StyledExampleCell";

const ExampleCell = ({
  val,
  tooltipContent,
  alignment,
  justify,
  textWeight,
  width,
  color,
}) => {
  return (
    <StyledExampleCell
      textWeight={textWeight}
      alignment={alignment}
      justify={justify}
      width={width}
      color={color}
    >
      <div>{val}</div>
      {tooltipContent && (
        <StyledTooltipContainer alignment={alignment}>
          <Popup
            position="top center"
            content={tooltipContent}
            trigger={<Icon name="question circle outline" color="grey" />}
          />
        </StyledTooltipContainer>
      )}
    </StyledExampleCell>
  );
};

export default ExampleCell;