import styled from "styled-components";
import { Table } from "semantic-ui-react";

// TODO: Change fullheighttable prop to something like scrollableTable for handling scrollable display
export const StyledTable = styled(Table)`
  margin: 0 !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
  tbody {
    /* display: ${(props) => (props.fullheighttable ? "block" : "")}; */
    height: ${(props) => (props.fullheighttable ? "30rem" : "")};

    overflow-y: auto;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 2;
    border-bottom: none;
    /* give class with this styling so only happens on top header */
    /* border-top-left-radius: 2px !important;
    border-top-right-radius: 2px !important; */
  }

  thead {
    border-top-left-radius: 8px;
  }

  td {
    height: ${(props) => (props.fullheighttd ? "31rem" : "")};
    position: relative;
    font-family: "Lato", sans-serif;
  }

  /* thead,
  tbody tr {
    display: ${(props) => (props.fullheighttable ? "table" : "")};
    width: 100%;
    table-layout: fixed;
  } */

  tbody,
  tr {
    width: 100%;
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
