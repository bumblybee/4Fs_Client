import React from "react";
// import { CSVLink } from "react-csv";
import { Icon, Button } from "semantic-ui-react";

const SleepTableFooter = ({ data }) => {
  return (
    <div style={{ paddingRight: "2%" }}>
      <Button icon floated="right" size="mini" title="Download CSV">
        <Icon name="download" />
      </Button>
    </div>
    // <CSVLink
    //   data={data}
    //   filename={"sleep.csv"}
    //   style={{ color: "#fff" }}
    //   title="Download CSV"
    // >
    //   <Icon name="download" />
    // </CSVLink>
  );
};

export default SleepTableFooter;
