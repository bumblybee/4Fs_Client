import styled from "styled-components";
import GaugeChart from "react-advanced-gauge-chart";

export const StyledGaugeWrapper = styled.div`
  position: relative;
  height: 100%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  svg g g.text-group text.percent-text {
    font-size: 1.15rem !important;
    font-weight: 600;
  }

  svg g.text-group text.fa,
  svg g.text-group text:last-child {
    font-size: 1.2rem !important;
  }

  svg g.label text.segment-value {
    font-style: italic !important;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    font-size: 0.9rem !important;
    z-index: 100 !important;
  }

  svg g.arc path.speedo-segment {
    fill: ${(props) => !props.today && "#cccccc55"};
  }

  svg g text.current-value {
    font-family: "Montserrat", sans-serif;
  }

  @media (max-width: 900px) {
    align-items: flex-end;
  }
`;

export const StyledGauge = styled(GaugeChart)`
  width: 360px !important;

  @media (max-width: 1027px) {
    width: 282px !important;
  }
`;
