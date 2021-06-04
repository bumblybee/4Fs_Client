import styled from "styled-components";
import GaugeChart from "react-advanced-gauge-chart";

export const StyledGaugeWrapper = styled.div`
  position: relative;
  height: 100%;
  /* margin-top: 3.6rem; */
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  .zero {
    position: absolute;
    bottom: 22%;
    left: 9%;
    font-weight: 600;
    transform: rotate(-90deg);
    color: #666;
  }

  .six {
    position: absolute;
    top: 25%;
    left: 19%;
    font-weight: 600;
    transform: rotate(-60deg);
    color: #666;
  }

  .twelve {
    position: absolute;
    top: -8%;
    left: 49%;
    transform: translateX(-50%);
    font-weight: 600;
    color: #666;
  }

  .eighteen {
    position: absolute;
    top: 25%;
    right: 17.5%;
    font-weight: 600;
    transform: rotate(60deg);
    color: #666;
  }

  .twenty-four {
    position: absolute;
    bottom: 22%;
    right: 10%;
    font-weight: 600;
    color: #666;

    transform: rotate(90deg);
  }

  svg g g.text-group text.percent-text {
    font-size: 1.15rem !important;
    font-weight: 600;
  }

  svg g.text-group text.fa,
  svg g.text-group text:last-child {
    font-size: 1.2rem !important;
    /* fill: #78db3b !important; */
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
`;

export const StyledGauge = styled(GaugeChart)`
  width: 360px !important;

  @media (max-width: 900px) {
    width: 280px !important;
  }
`;
