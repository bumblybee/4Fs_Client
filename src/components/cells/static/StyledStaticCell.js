import styled from "styled-components";

export const StyledStaticCell = styled.div`
  text-align: ${(props) => props.aligntext};
  display: flex;
  justify-content: ${(props) => props.alignment};
  align-items: ${(props) => props.alignItems};
  font-weight: ${(props) => props.textweight};
  color: ${(props) => props.condition && "#21ce0f"};
  height: 100%;

  .system-performed {
    font-weight: bold;
    font-size: 1.15rem;
    width: max-content;
    margin: auto 0 auto 35%;

    .label {
      transform: translateX(-30%);
      font-size: 1rem;
      text-align: center;
    }
  }

  .system-performed-example {
    width: max-content;
    margin: auto 0 auto 35%;
    color: #33333377;
  }

  .system-progress-week {
    font-size: 0.895rem;
    font-family: "Lato", sans-serif;
  }

  .system-progress-week.dates {
    font-size: 0.89rem;
  }

  .system-progress-week.performed,
  .system-progress-week.goal {
    margin-right: 1.5rem;
  }

  .system-progress-week.performed {
    font-weight: 600;
  }

  .sleep-hours-slept {
    text-align: center;
    font-weight: bold;
    color: #008089;
  }

  .fasting-progress,
  .progress-date,
  .system-progress-week.dates {
    margin-top: -0.15rem;
    font-size: 0.89rem;
    font-weight: 600;
  }
`;
