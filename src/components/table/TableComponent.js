import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { StyledTable, StyledTableWrapper } from "./StyledTable";

TableComponent.TD = function TD({ children, ...props }) {
  return (
    <Table.Cell
      {...props}
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
        {...props}
        width={header.width && header.width}
      >
        {header.label}
      </TableComponent.TH>
    ));
  };

  const renderDescriptionHeader = () => {
    /* If we have an additional header with descriptive text */
    return (
      <Table.Header className={`description-header ${props.className}`}>
        <TableComponent.TR>
          <TableComponent.TH
            colSpan="16"
            className={`description-header ${props.className}`}
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
      <TableComponent.TR key={idx} className={props.className}>
        {renderCells(row)}
      </TableComponent.TR>
    ));
  }

  const renderCells = (row) => {
    return row.map((cellComponent, idx) => (
      <TableComponent.TD
        className={props.className}
        key={idx}
        collapsing={cellComponent.collapsing}
      >
        {cellComponent}
      </TableComponent.TD>
    ));
  };

  return (
    // TODO Add to stylesheet and take in classNames
    <StyledTableWrapper
      className={props.className}
      color={props.color}
      width={props.width}
      height={props.height}
      maxHeight={props.maxHeight}
      margin={props.margin}
    >
      <StyledTable
        {...props}
        className={props.className}
        rowdata={rowData}
        color={props.color}
        compact={props.compact}
        unstackable={!props.stackable}
        example={props.example}
        striped={props.striped}
        collapsing={props.collapsing}
        celled={props.celled}
        descriptionheader={props.descriptionheader}
      >
        {props.descriptionheader && renderDescriptionHeader()}

        <Table.Header className={props.className}>
          <TableComponent.TR>{renderColumns(props.columns)}</TableComponent.TR>
        </Table.Header>
        <Table.Body className={props.className}>
          {renderRows(rowsMappedToColumns)}
        </Table.Body>

        {props.footer && <TableComponent.TF>{props.footer}</TableComponent.TF>}
      </StyledTable>
    </StyledTableWrapper>
  );
}
