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
  className,
}) => {
  return (
    <StyledExampleCell
      className={className}
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
            size="small"
            offset={[10, -2]}
            position="top right"
            content={tooltipContent}
            trigger={<Icon name="question circle outline" color="grey" />}
          />
        </StyledTooltipContainer>
      )}
    </StyledExampleCell>
  );
};

export default ExampleCell;
