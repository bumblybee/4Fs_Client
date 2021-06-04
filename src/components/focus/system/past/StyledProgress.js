import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const StyledProgressToggle = styled(Segment)`
  color: ${(props) => (props.showweeks ? "#b463b4" : "#800080")};
  font-weight: 600;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 0 0 0.2rem !important;
  font-family: "Lato";

  i {
    color: ${(props) => (props.showweeks ? "#b463b4" : "#800080")};
  }
`;

export const StyledProgressText = styled.p`
  padding-left: 1.5rem;
`;
