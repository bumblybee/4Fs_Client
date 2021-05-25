import React from "react";
import CsvDownloader from "react-csv-downloader";

import { Icon, Popup } from "semantic-ui-react";

const SleepTableHeader = ({ data, columns }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ marginRight: "auto", cursor: "pointer" }}>
        <CsvDownloader
          datas={data}
          columns={columns}
          filename="sleep-tracking"
          // title="Download CSV"
        >
          <Popup
            content="Download CSV"
            position="top center"
            trigger={<Icon name="download" />}
          />
        </CsvDownloader>
      </div>
      <div style={{ margin: "auto", fontStyle: "italic" }}>
        Pro Tip: Set a timer on your phone for your ideal bedtime and wake up
        time.
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Popup
          position="top center"
          content="Hours slept will calculate automatically based on the time you went to bed and the time you woke up."
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </div>
  );
};

export default SleepTableHeader;
