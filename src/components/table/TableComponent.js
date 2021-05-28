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
        <TableComponent.TH colSpan="12">{children}</TableComponent.TH>
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
          borderRadius: 0,
          fontFamily: "Lato",
          fontSize: props.fontsize || "1.1rem",
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
            className="description-header"
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
      <TableComponent.TR key={idx}>{renderCells(row)}</TableComponent.TR>
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
    // TODO Add to stylesheet and take in classNames
    <div
      color={props.color}
      style={{
        height: props.height || "min-content",
        minHeight: "48px",
        maxHeight: props.maxHeight || "34rem",
        overflowY: "auto",
        overflowX: "hidden",
        width: props.width,
        border: "1px solid #22242626",
        borderTop: "none",
        borderRadius: "0.27rem",
        // boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",

        margin: props.margin,
      }}
    >
      <StyledTable
        {...props}
        className={props.className}
        rowdata={rowData}
        color={props.color}
        compact={props.compact}
        unstackable
        example={props.example}
        striped={props.striped}
        collapsing={props.collapsing}
        celled={props.celled}
        descriptionheader={props.descriptionheader}
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
    </div>
  );
}
