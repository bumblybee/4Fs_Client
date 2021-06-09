import styled from "styled-components";
import { Table } from "semantic-ui-react";

export const StyledTableWrapper = styled.div`
  height: ${(props) => props.height || "min-content"};
  width: ${(props) => props.width};
  max-width: 100%;
  min-height: 48px;
  max-height: ${(props) => props.maxHeight || "34rem"};
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
        : props.className === "fasting" &&
          `2px solid ${props.color} !important`};
  }

  @media (max-width: 620px) {
    width: ${(props) => `calc(${props.width} + 35%)`};
    max-height: ${(props) => props.mobileHeight || "20rem"};

    /* overflow-y: scroll; */
  }
`;

export const StyledTable = styled(Table)`
  margin: 0 !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
  border-top: none !important;

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
    min-height: 45px !important;
    position: relative;
    font-family: "Lato", sans-serif;

    @media (max-width: 620px) {
    }
  }

  .sheets td {
    display: flex;
    /* flex-direction: center; */
    align-items: center;
    justify-content: center;
  }

  .fasting-progress td {
    padding: 0.5rem 0.25rem 0.3rem !important;
  }

  .fasting-progress thead th {
    padding: 0 !important;
  }

  // Sticky example row

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
    /* Force table to not be like table anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    // Below keeps table header intact and displayed across width

    /* .habits thead th {
      display: table-header-group;
      position: sticky;
      top: 0;
    } */

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

    /* .fasting-progress tr th {
      width: 79% !important;
      height: 45%;
    }

    .fasting-progress tr th:first-child {
      width: 21% !important;
    } */

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

    /* .fasting-progress tr td:first-child {
      width: 21% !important;
      min-height: 31px !important;
    } */

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
      height: ${(props) => (props.fullheighttd ? "20rem" : "")};
    }
  }
`;
