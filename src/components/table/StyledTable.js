import styled from "styled-components";
import { Table } from "semantic-ui-react";

export const StyledTable = styled(Table)`
  tbody {
    display: block;
    height: ${(props) =>
      props.rowdata.length > 9 || props.fullheighttable ? "33.5rem" : "auto"};
    overflow: auto;
  }

  td {
    height: ${(props) => (props.fullheighttd ? "33rem" : "")};
    position: relative;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
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

    /* Hide table headers (but not display: none;, for accessibility) */
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
