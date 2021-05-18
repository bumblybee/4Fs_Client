import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { StyledTable } from "./StyledTable";

TableComponent.TD = function TD({ children, ...props }) {
  return (
    <Table.Cell
      {...props}
      style={{ minHeight: "45px" }}
      collapsing={props.collapsing}
      textAlign={props.alignment}
    >
      {children}
    </Table.Cell>
  );
};

TableComponent.TR = function TR({ children, ...props }) {
  return <Table.Row {...props}>{children}</Table.Row>;
};

TableComponent.TH = function TH({ children, ...props }) {
  return <Table.HeaderCell {...props}>{children}</Table.HeaderCell>;
};

TableComponent.TF = function TF({ children, ...props }) {
  return (
    <Table.Footer {...props} fullWidth>
      <TableComponent.TR>
        <TableComponent.TH colSpan="8">{children}</TableComponent.TH>
      </TableComponent.TR>
    </Table.Footer>
  );
};

export default function TableComponent({ children, ...props }) {
  const [rowData, setRowData] = useState(props.rows);

  useEffect(() => {
    setRowData([...props.rows]);
  }, [props.rows]);

  const renderColumns = (columns) => {
    return columns.map((header, idx) => (
      <TableComponent.TH
        key={idx}
        textAlign={header.aligntext}
        style={{
          backgroundColor: props.color,
          color: "#fff",
          borderRadius: props.descriptionheader ? "0" : "",
          fontFamily: "Lato",
          fontSize: "1.1rem",
        }}
        width={header.width && header.width}
      >
        {header.label}
      </TableComponent.TH>
    ));
  };

  const renderDescriptionHeader = () => {
    /* If we have an additional header with descriptive text */
    return (
      <Table.Header>
        <TableComponent.TR>
          <TableComponent.TH
            style={{
              backgroundColor: props.color,
              color: "#fff",
              textAlign: "center",
            }}
            colSpan="16"
            className="descriptionHeader"
          >
            {props.descriptionheader}
          </TableComponent.TH>
        </TableComponent.TR>
      </Table.Header>
    );
  };

  const rowsMappedToColumns = rowData.map((row) => {
    const rowCells = props.columns.map((column) => {
      const { key: columnKey } = column;

      return row[columnKey].cellComponent;
    });
    return rowCells;
  });

  function renderRows(mappedRows) {
    return mappedRows.map((row, idx) => (
      <TableComponent.TR
        key={idx}
        style={{
          minHeight: "45px",
          textAlign: props.aligntext,
          background: props.example && idx === 0 && "#daddde99",
        }}
      >
        {renderCells(row)}
      </TableComponent.TR>
    ));
  }

  const renderCells = (row) => {
    return row.map((cellComponent, idx) => (
      <TableComponent.TD key={idx} collapsing={cellComponent.collapsing}>
        {cellComponent}
      </TableComponent.TD>
    ));
  };

  return (
    <StyledTable
      {...props}
      rowdata={rowData}
      color={props.color}
      compact={props.compact}
      unstackable
      example={props.example}
      striped={props.striped}
      collapsing={props.collapsing}
      celled={props.celled}
    >
      {props.descriptionheader && renderDescriptionHeader()}

      <Table.Header>
        <TableComponent.TR style={{ textAlign: props.aligntext }}>
          {renderColumns(props.columns)}
        </TableComponent.TR>
      </Table.Header>
      <Table.Body>{renderRows(rowsMappedToColumns)}</Table.Body>

      {props.footer && <TableComponent.TF>{props.footer}</TableComponent.TF>}
    </StyledTable>
  );
}
