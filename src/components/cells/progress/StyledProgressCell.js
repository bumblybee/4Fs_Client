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
    border: none;
    background: #fff;

    ::-moz-progress-bar {
      height: 14px;
      border-radius: 20px;
      background: ${(props) => props.color};
    }

    ::-webkit-progress-bar {
      height: 14px;
      border-radius: 20px;
      background-color: #ddddddee;
    }

    ::-webkit-progress-value {
      height: 14px;
      border-radius: 20px;
      background: ${(props) => props.color};
    }
  }

  @media (max-width: 620px) {
    padding: 0 0.25rem;

    progress[value] {
      ::-webkit-progress-bar {
        height: 13px;
      }

      ::-webkit-progress-value {
        height: 13px;
      }
    }
  }
`;

export const StyledPercent = styled.span`
  position: absolute;
  left: ${(props) =>
    props.val >= 100
      ? "92%"
      : props.val <= 99 && props.val > 70
      ? `calc(${props.val}% - 40px)`
      : props.val <= 70 && props.val > 60
      ? `calc(${props.val}% - 35px)`
      : (props.val <= 60 && props.val > 50) ||
        (props.val < 45 && props.val >= 10)
      ? `calc(${props.val}% - 30px)`
      : props.val <= 50 && props.val > 45
      ? "42%"
      : props.val < 10
      ? `calc(${props.val}% - 10px)`
      : "3%"};
  top: -7%;
  font-size: 0.75rem;

  @media (max-width: 620px) {
    /* left: ${(props) =>
      props.val >= 100
        ? "85%"
        : props.val >= 0 && props.val < 45
        ? `calc(${props.val}% - 9%)`
        : props.val >= 45 && props.val <= 65
        ? "34%"
        : props.val > 65 && props.val <= 70
        ? "60%"
        : `calc(${props.val}% - 40px)`}; */
  }

  @media (max-width: 385px) {
    left: ${(props) =>
      props.val >= 100
        ? "87%"
        : props.val <= 99 && props.val > 75
        ? `calc(${props.val}% - 30px)`
        : props.val < 45 && props.val >= 10
        ? `calc(${props.val}% - 22px)`
        : props.val <= 70 && props.val > 45
        ? "32%"
        : props.val < 10
        ? `calc(${props.val}% - 9px)`
        : `calc(${props.val}% - 25px)`};

    top: -11.5%;
    font-size: 0.7rem;
  }
`;

export const StyledHours = styled.div`
  position: absolute;
  top: -17%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 620px) {
    top: -12%;
    font-size: 0.9375rem;
  }

  @media (max-width: 385px) {
    top: -16%;
    font-size: 0.85rem;
  }
`;
