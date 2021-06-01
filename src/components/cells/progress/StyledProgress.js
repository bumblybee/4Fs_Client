import styled from "styled-components";

export const StyledProgressWrapper = styled.div`
  margin: 0;
  position: relative;
  color: #fff;
  font-weight: 700;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  font-family: "Lato";

  progress[value] {
    width: ${(props) => props.width};
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
  left: ${(props) => (props.val > 100 ? "94%" : `calc(${props.val}% - 6%)`)};
  top: -6%;
  font-size: 0.75rem;
`;

export const StyledHours = styled.div`
  position: absolute;
  top: -18%;
  left: 50%;
  transform: translateX(-50%);
`;
