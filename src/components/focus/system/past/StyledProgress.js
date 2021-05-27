import styled from "styled-components";
import { Segment } from "semantic-ui-react";
import TableComponent from "../../../table/TableComponent";

export const StyledProgressWrapper = styled.div`
  width: fit-content;
  i {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledProgressToggle = styled(Segment)`
  color: ${(props) => (props.showWeeks ? "#b463b4" : "#800080")};
  font-weight: 600;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 0 0 0.2rem !important;
  font-family: "Lato";

  i {
    color: ${(props) => (props.showWeeks ? "#b463b4" : "#800080")};
  }
`;

export const StyledProgressTable = styled(TableComponent)`
  /* width: 43% !important; */
`;
