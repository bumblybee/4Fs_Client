import styled from "styled-components";
import { Table } from "semantic-ui-react";

export const StyledTable = styled(Table)`
  margin: 0 !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
  border-top: ${(props) => `1px solid ${props.color}`};
  /* border-top: none !important; */

  tbody {
    height: ${(props) => (props.fullheighttable ? "30rem" : "")};
    position: relative;
    overflow-y: auto;
    width: 100%;
  }

  tr {
    min-height: 45px;
    text-align: ${(props) => props.aligntext};
    width: 100%;
  }

  tbody tr:first-child {
    background: ${(props) => props.example && "#daddde88"};
  }

  thead {
    border-top-left-radius: 8px;
  }

  td {
    height: ${(props) => (props.fullheighttd ? "30rem" : "")};
    min-height: 40px;
    position: relative;
    font-family: "Lato", sans-serif;
  }

  .fasting-progress td {
    padding: 0.5rem 0.25rem 0.3rem !important;
  }

  /* .fasting-progress tr:first-child th:first-child {
    text-align: left;
    padding-left: 0.5rem !important; */
  /* } */

  /* tbody tr:first-child,
  tr:first-child td:first-child {
    position: sticky;
    top: ${(props) => props.descriptionHeaderHeight};
    left: ${(props) => props.descriptionHeaderHeight};
    color: purple;
  } */

  .description-header {
    height: ${(props) => props.descriptionHeaderHeight} !important;
    position: sticky;
    top: 0;
    z-index: 2;
    margin: 0 !important;
  }

  th:not(.description-header) {
    position: sticky;
    top: ${(props) =>
      props.descriptionheader ? props.descriptionHeaderHeight : "0"};
    z-index: 2;
    border-bottom: none;
  }

  input[type="text"] {
    border: none;

    background: #eeeeee55;
    :focus {
      outline: none;
      border: none;
      background: #eee;
    }
  }

  input[type="date"] {
    :hover {
      cursor: pointer;
    }
  }

  /* Responsive table */

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    tr {
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: ${(props) => props.color};
    }

    /* Hide table headers (but not display: none, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
`;
