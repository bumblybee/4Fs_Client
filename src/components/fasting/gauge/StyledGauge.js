import styled from "styled-components";
import GaugeChart from "react-advanced-gauge-chart";

export const StyledGaugeWrapper = styled.div`
  position: relative;
  height: 100%;
  /* width: 50%; */
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  svg g g.text-group text.percent-text {
    font-size: 1.15rem !important;
    font-weight: 600;
    font-family: "Lato", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 900px) {
    align-items: flex-end;
  }

  @media (max-width: 810px) {
    align-items: center;
  }
`;

export const StyledGauge = styled(GaugeChart)`
  width: 350px !important;
  height: 140px;

  /* @media (max-width: 768px) {
    width: 280px !important;
    height: 100px !important;
  } */

  @media (max-width: 540px) {
    width: 250px !important;
    height: 90px !important;
  }

  @media (max-width: 480px) {
    width: 305px !important;
    height: 125px !important;
  }
`;
