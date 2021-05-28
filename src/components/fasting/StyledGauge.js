import styled from "styled-components";

export const StyledGaugeWrapper = styled.div`
  position: relative;
  height: 100%;
  margin-top: 0.75rem;
  color: #fff;

  .zero {
    position: absolute;
    bottom: 22%;
    left: 11%;
    font-weight: 600;
  }

  .fifty {
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
  }

  .hundred {
    position: absolute;
    bottom: 22%;
    right: 7.5%;
    font-weight: 600;
  }

  svg g.text-group text {
    font-size: 1.75rem !important;
    font-weight: 600;
  }

  svg g.text-group text.fa,
  svg g.text-group text:last-child {
    font-size: 1.2rem !important;
    /* fill: #78db3b !important; */
  }
`;
