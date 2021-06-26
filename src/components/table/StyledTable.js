import styled from "styled-components";
import { Table } from "semantic-ui-react";

export const StyledTableWrapper = styled.div`
  height: ${(props) => props.height || "min-content"};
  width: ${(props) => props.width};
  max-width: 100%;
  min-height: 48px;
  max-height: ${(props) => props.maxHeight || ""};
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

    width: ${(props) => props.className === "system-progress" && "60%"};

    border: ${(props) => props.className === "fasting" && "none"};
  }

  @media (max-width: 640px) {
    width: ${(props) => `calc(${props.width} + 35%)`};

    // Scroll and show scrollbar sleep and system mobile
    /* overflow-x: ${(props) =>
      (props.className === "system" && "auto") ||
      (props.className === "sleep" && "auto")};

    width: ${(props) =>
      (props.className === "sleep" && "100%") ||
      (props.className === "system-progress" && "100%")}; */

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-thumb {
      display: ${(props) =>
        (props.className === "system" && "block") ||
        (props.className === "sleep" && "block")};
    }
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    width: ${(props) => props.className === "system-progress" && "60%"};
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

  th {
    background-color: ${(props) => props.color} !important;
    color: #fff !important;
    border-radius: 0 !important;
    font-family: "Lato";
    font-size: ${(props) => props.fontsize || "1.1rem"};
  }

  th.description-header {
    text-align: center !important;
  }

  tr {
    min-height: 45px;
    text-align: ${(props) => props.aligntext};
    width: 100%;
    text-align: ${(props) => props.aligntext};
  }

  // Color example cells
  tbody tr:first-child {
    background: ${(props) => props.example && "#daddde88"};
  }

  thead {
    border-top-left-radius: 8px;
  }

  td {
    height: ${(props) => (props.fullheighttd ? "30rem" : "auto")};
    min-height: 45px !important;
    position: relative;
    font-family: "Lato", sans-serif;
  }

  // Center sheet components buttons
  .sheets td {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fasting-progress th {
    position: sticky;
    top: 0;
    z-index: 2;
    margin: 0 !important;
  }

  .fasting-progress td {
    padding: 0.5rem 0.25rem 0.3rem !important;
  }

  .fasting-progress thead th {
    padding: 0.1rem !important;
  }

  .fasting-progress thead {
    position: static !important;
    top: 0;
    left: 0;
  }

  thead.rewards,
  thead.swagger {
    position: sticky !important;
    top: 0 !important;
    z-index: 2 !important;
    margin: 0 !important;
    color: red;
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
    // Don't display milestones or sleep like table
    table.milestones,
    table.system,
    table.sleep,
    thead.milestones,
    thead.system,
    thead.sleep,
    tbody.milestones,
    tbody.system,
    tbody.sleep,
    th.milestones,
    th.system,
    th.sleep,
    td.milestones,
    td.system,
    td.sleep,
    tr.milestones,
    tr.system,
    tr.sleep {
      display: block;
    }

    thead.sleep {
      display: flex;
    }

    .sleep tr {
      text-align: left !important;
    }

    // Below keeps table header intact and displayed across width and keeps heights reasonable

    .habits tr,
    .fasting-progress tr {
      display: grid;
      width: 100%;
    }

    .habits tr {
      grid-template-columns: 1fr 1fr;
    }

    // Keep description header spread across width
    thead.habits.description-header tr {
      display: flex;
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

    td.milestones {
      height: ${(props) => (props.fullheighttd ? "30rem" : "auto")};
    }

    td.sleep,
    td.system {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    // Hide example row and empty row delete cell
    tbody.sleep tr:first-child,
    tbody.sleep tr:last-child td:last-child,
    tbody.system tr:first-child,
    tbody.system tr:last-child td:last-child {
      display: none;
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
        (props.className === "milestones" && `2px solid ${props.color}`) ||
        (props.className === "sleep" && `2px solid ${props.color}`)};
    }

    tr:not(:last-of-type) {
      border-bottom: ${(props) =>
        props.className === "system" && `2px solid ${props.color}`};
    }

    /* Hide certain table headers (but not display: none, for accessibility) */
    :not(.rewards):not(.habits):not(.beliefs):not(.swagger):not(.system-progress)
      thead {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    // Show description header
    thead.sleep:first-of-type,
    thead.system:first-of-type {
      position: static !important;
    }

    // Sticky table headers that are being kept visible

    thead.fasting-progress,
    thead.fasting-progress th {
      padding: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 2;
      margin: 0 !important;
    }

    thead.rewards {
      position: sticky !important;
      top: 0 !important;
      z-index: 2 !important;
      margin: 0 !important;
    }

    thead.rewards th {
      height: 45px !important;
    }

    td:not(.fasting) {
      /* Border bottom to look like row */
      border: none !important;
      border-bottom: 1px solid #eee !important;
      position: relative;
    }

    // faux table header
    td:before {
      position: absolute;
      top: 25%;
      left: 5%;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
    }

    // Content to render before td
    .system td:nth-child(1):before {
      content: "Practice";
    }
    .system td:nth-child(2):before {
      content: "${(props) =>
        props.className === "system" && props.columns[1].label}";
    }
    .system td:nth-child(3):before {
      content: "${(props) =>
        props.className === "system" && props.columns[2].label}";
    }
    .system td:nth-child(4):before {
      content: "${(props) =>
        props.className === "system" && props.columns[3].label}";
    }
    .system td:nth-child(5):before {
      content: "${(props) =>
        props.className === "system" && props.columns[4].label}";
    }
    .system td:nth-child(6):before {
      content: "${(props) =>
        props.className === "system" && props.columns[5].label}";
    }
    .system td:nth-child(7):before {
      content: "${(props) =>
        props.className === "system" && props.columns[6].label}";
    }
    .system td:nth-child(8):before {
      content: "${(props) =>
        props.className === "system" && props.columns[7].label}";
    }
    .system td:nth-child(9):before {
      content: "${(props) =>
        props.className === "system" && props.columns[8].label}";
    }
    .system td:nth-child(10):before {
      content: "${(props) =>
        props.className === "system" && props.columns[9].label}";
    }
    .system td:nth-child(11):before {
      content: "";
    }

    // If we don't have a start date, don't show anything but practice row
    .system td:nth-child(2),
    .system td:nth-child(3),
    .system td:nth-child(4),
    .system td:nth-child(5),
    .system td:nth-child(6),
    .system td:nth-child(7),
    .system td:nth-child(8),
    .system td:nth-child(9),
    .system td:nth-child(10),
    .system td:nth-child(11) {
      display: ${(props) =>
        props.className === "system" && !props.currWeek.startDate && "none"};
    }

    // If no val at practice, only show practice, don't show goal, days, etc.
    .system tr:last-of-type td:not(:first-of-type) {
      display: ${(props) =>
        props.className === "system" &&
        props.rowdata[props.rowdata.length - 1].practice.cellComponent.props
          .val === "" &&
        "none"};
    }

    .sleep td:nth-child(1):before {
      content: "Date";
    }
    .sleep td:nth-child(2):before {
      content: "Went to bed";
    }
    .sleep td:nth-child(3):before {
      content: "Woke up";
    }
    .sleep td:nth-child(4):before {
      content: "Hours Slept";
    }
    .sleep td:nth-child(5):before {
      content: "Comments";
    }
  }

  @media (max-width: 620px) {
    td {
      height: ${(props) => (props.fullheighttd ? "20rem" : "auto")};
    }
  }

  @media (max-width: 1024px) and (orientation: landscape),
    (min-width: 768px) and (max-width: 1024px) {
    thead.sleep:nth-of-type(2),
    thead.system:nth-of-type(2) {
      position: static !important;
    }

    table.sleep,
    table.system {
      display: table;
    }
    thead.sleep,
    thead.system {
      display: table-header-group;
    }
    tbody.sleep,
    tbody.system {
      display: table-row-group;
    }
    th.sleep,
    th.system {
      display: table-cell;
    }
    td.sleep,
    td.system {
      display: table-cell;
    }
    tr.sleep,
    tr.system {
      display: table-row;
    }

    th.sleep {
      width: 16% !important;
    }

    th.sleep:nth-child(5) {
      width: 30% !important;
    }

    .sleep td:nth-child(1):before,
    .sleep td:nth-child(2):before,
    .sleep td:nth-child(3):before,
    .sleep td:nth-child(4):before,
    .sleep td:nth-child(5):before,
    .system td:nth-child(1):before,
    .system td:nth-child(2):before,
    .system td:nth-child(3):before,
    .system td:nth-child(4):before,
    .system td:nth-child(5):before,
    .system td:nth-child(6):before,
    .system td:nth-child(7):before,
    .system td:nth-child(8):before,
    .system td:nth-child(9):before,
    .system td:nth-child(10):before {
      content: "";
    }

    // In portrait mode these are set to display none if there's no startDate so that the bottom row only shows practice cell. Want to display again in landscape mode
    .system td:nth-child(2),
    .system td:nth-child(3),
    .system td:nth-child(4),
    .system td:nth-child(5),
    .system td:nth-child(6),
    .system td:nth-child(7),
    .system td:nth-child(8),
    .system td:nth-child(9),
    .system td:nth-child(10),
    .system td:nth-child(11) {
      display: table-cell;
    }

    // Show example row in landscape

    tbody.system tr:first-child {
      display: table-row;
    }

    // Show empty delete cell in landscape
    tbody.sleep tr:last-child td:last-child,
    tbody.system tr:last-child td:last-child {
      display: table-cell;
    }

    // Re-show system cells in last row - hidden in mobile portrait mode
    .system tr:last-of-type td:not(:first-of-type) {
      display: ${(props) =>
        props.className === "system" &&
        props.rowdata[props.rowdata.length - 1].practice.cellComponent.props
          .val === "" &&
        "table-cell"};
    }
  }
`;
