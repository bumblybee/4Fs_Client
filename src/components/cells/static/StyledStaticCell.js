import styled from "styled-components";

export const StyledStaticCell = styled.div`
  .system-performed {
    color: ${(props) => props.condition && "#21ba45"};
    font-weight: bold;
    font-size: 1.15rem;
    width: max-content;
    margin: auto 0 auto 35%;
  }

  .sleep-hours-slept {
    text-align: center;
    font-weight: bold;
  }
`;
