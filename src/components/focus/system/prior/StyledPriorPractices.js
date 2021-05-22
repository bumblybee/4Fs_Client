import styled from "styled-components";
import { Segment, Accordion } from "semantic-ui-react";
import TableComponent from "../../../table/TableComponent";

export const StyledProgressWrapper = styled.div`
  /* width: ${(props) => (props.showWeeks ? "50.5%" : "12%")}; */
  i {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledProgressToggle = styled(Segment)`
  color: ${(props) => (props.showWeeks ? "green" : "#800080")};
  font-weight: 600;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 0 0 0.2rem !important;
  font-family: "Lato";
`;

export const StyledAccordion = styled(Accordion)`
  min-height: min-content;
  /* max-height: 120px !important; */
  overflow-y: auto !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

export const StyledProgressTable = styled(TableComponent)`
  width: 50% !important;
`;
