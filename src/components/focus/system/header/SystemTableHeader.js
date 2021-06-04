import React, { useState, useContext } from "react";
import moment from "moment";
import {
  startWeek,
  deleteCurrentWeek,
} from "../../../../api/focus/practicesApi";
import { NotificationContext } from "../../../../context/notification/NotificationContext";

import {
  StyledSystemHeaderWrapper,
  StyledStartDateContainer,
  StyledButton,
  StyledDatePicker,
} from "./StyledSystemTableHeader";

const SystemTableHeader = ({
  currWeek,
  setCurrWeek,
  setCurrPractices,
  getStoredPractices,
}) => {
  const { setNotificationMessage } = useContext(NotificationContext);
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleStartWeek = async () => {
    const week = await startWeek({ startDate: date });
    if (week.error) {
      setNotificationMessage(week.error, "error", true);
      return;
    }

    setCurrWeek(week.data);
    setCurrPractices(week.data.practices);
  };

  const handleResetWeek = async () => {
    if (
      window.confirm(
        "Are you sure you want to reset the current week? This will delete all all goals and progress for the week."
      )
    ) {
      await deleteCurrentWeek(currWeek.id);

      setDate(null);
      setCurrWeek({ id: null, startDate: null, endDate: null });
      setCurrPractices([]);
      await getStoredPractices();
    }
  };

  return (
    <StyledSystemHeaderWrapper>
      <div>
        {/* Dynamically render text*/}
        {currWeek.startDate ? (
          <p>
            Input your new practice and define a goal for the amount of times
            you wish to complete it per week. Check off each day you perform the
            practice.
          </p>
        ) : (
          <p>Choose a start date to begin tracking your practices. </p>
        )}
      </div>
      <StyledStartDateContainer>
        {currWeek.startDate ? (
          <>
            <div>
              {moment(currWeek.startDate).format("MM/DD/YYYY")} -{" "}
              {moment(currWeek.endDate).format("MM/DD/YYYY")}
            </div>
            <StyledButton size="small" onClick={handleResetWeek}>
              Reset
            </StyledButton>
          </>
        ) : (
          <>
            <StyledDatePicker
              value={date || ""}
              onChange={handleChange}
              type="date"
              date={date}
              min={moment().format("YYYY-MM-DD")}
            />
            <StyledButton size="small" onClick={handleStartWeek}>
              Start
            </StyledButton>
          </>
        )}
      </StyledStartDateContainer>
    </StyledSystemHeaderWrapper>
  );
};

export default SystemTableHeader;
