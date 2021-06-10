import styled from "styled-components";
import { Table } from "semantic-ui-react";

export const StyledTableWrapper = styled.div`
  height: ${(props) => props.height || "min-content"};
  width: ${(props) => props.width};
  max-width: 100%;
  min-height: 48px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #22242626;
  border-top: none;
  border-radius: 0.27rem;
  margin: ${(props) => props.margin};

  @media (max-width: 1024px) {
    border-top: ${(props) =>
      props.className === "sheets"
        ? `2px solid ${props.color} !important`
        : props.className === "milestones"
        ? `2px solid ${props.color} !important`
        : props.className === "fasting" && `none`};

    border: ${(props) => props.className === "fasting" && "none"};
  }

  @media (max-width: 620px) {
    width: ${(props) => `calc(${props.width} + 35%)`};
  }
`;

export const StyledTable = styled(Table)`
  margin: 0 !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
  border-top: none !important;
  overflow-x: hidden;

  tbody {
    height: ${(props) => (props.fullheighttable ? "30rem" : "")};
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
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
    // Changed below from 45px to auto to fix fasting
    height: ${(props) => (props.fullheighttd ? "30rem" : "auto")};
    min-height: 45px !important;
    position: relative;
    font-family: "Lato", sans-serif;
  }

  .sheets td {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fasting-progress td {
    padding: 0.5rem 0.25rem 0.3rem !important;
  }

  .fasting-progress thead th {
    padding: 0.1rem !important;
  }

  /* .description-header {
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
  } */

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
    /* Force table to not be like table anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    td.milestones {
      height: ${(props) => (props.fullheighttd ? "30rem" : "auto")};
    }

    // Below keeps table header intact and displayed across width

    .habits tr,
    .fasting-progress tr {
      /* display: flex;
      
      justify-content: stretch;
      align-items: center; */
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      /* height: 100%; */
    }

    .fasting-progress tr {
      grid-template-columns: 1fr 4fr;
    }

    .fasting-progress tr,
    .fasting-progress td {
      height: 20px !important;
    }

    .habits tr th,
    .fasting-progress tr th {
      width: 100% !important;
    }

    /* .fasting-progress td {
      padding: 0.5rem 0.25rem 0.3rem !important;
    } */

    .fasting-progress thead th {
      padding: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px !important;
    }

    // Below keeps row and cells spread across width

    .habits tr td,
    .fasting-progress tr td.fasting-progress {
      width: 100%;
      height: 100%;
    }

    .fasting-progress tr td.fasting-progress,
    .fasting-progress tr {
      min-height: 30px !important;
      max-height: 30px !important;
    }

    tr {
      border-bottom: ${(props) =>
        props.className === "milestones" && `2px solid ${props.color}`};
    }

    /* Hide certain table headers (but not display: none, for accessibility) */
    :not(.rewards):not(.habits):not(.beliefs):not(.swagger) thead {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    .fasting-progress thead {
      position: static !important;
      top: 0;
      left: 0;
      height: 20px !important;
    }

    // Sticky table heads that are being kept visible

    thead.rewards,
    thead.swagger {
      position: sticky !important;
      top: 0 !important;
      z-index: 2 !important;
      margin: 0 !important;
      color: red;
    }

    // Attempt at stickying example cell
    /* tbody.swagger tr:first-of-type {
      position: sticky !important;
      top: 0.1% !important;
      z-index: 2 !important;
    } */

    td:not(.fasting) {
      /* Behave  like a "row" */
      border: none !important;
      border-bottom: 1px solid #eee !important;
      /* position: relative; */
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

  @media (max-width: 620px) {
    td {
      height: ${(props) => (props.fullheighttd ? "20rem" : "auto")};
    }
  }
`;
