import React from "react";
import CsvDownloader from "react-csv-downloader";
import { Icon, Popup } from "semantic-ui-react";
import { StyledSleepHeader } from "./StyledSleep";

const SleepTableHeader = ({ data, columns }) => {
  return (
    <StyledSleepHeader>
      <div className="csv">
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
      <div className="heading">
        Pro Tip: Set a timer on your phone for your ideal bedtime and wake up
        time.
      </div>
      <div className="info">
        <Popup
          position="top center"
          content="Hours slept will calculate automatically based on the time you went to bed and the time you woke up."
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </StyledSleepHeader>
  );
};

export default SleepTableHeader;
