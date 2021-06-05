import styled from "styled-components";

export const StyledProgressWrapper = styled.div`
  margin: 0;
  position: relative;
  color: #fff;
  font-weight: 700;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  font-family: "Lato";
  padding: 0 1rem;

  progress[value] {
    width: 100%;
    appearance: none;

    ::-webkit-progress-bar {
      height: 12px;
      border-radius: 20px;
      background-color: #ddddddee;
    }

    ::-webkit-progress-value {
      height: 12px;
      border-radius: 20px;
      background: ${(props) => props.color};
    }
  }
`;

export const StyledPercent = styled.span`
  position: absolute;
  left: ${(props) =>
    props.val >= 100
      ? "92%"
      : props.val >= 50 && props.val <= 59
      ? "42%"
      : `calc(${props.val}% - 6%)`};
  top: -8%;
  font-size: 0.75rem;

  @media (max-width: 620px) {
    left: ${(props) =>
      props.val >= 100
        ? "86%"
        : props.val >= 0 && props.val < 45
        ? `calc(${props.val}% - 7%)`
        : props.val >= 45 && props.val <= 60
        ? "34.5%"
        : props.val > 60 && props.val <= 67
        ? "59%"
        : `calc(${props.val}% - 11%)`};
  }
`;

export const StyledHours = styled.div`
  position: absolute;
  top: -19%;
  left: 50%;
  transform: translateX(-50%);
`;
