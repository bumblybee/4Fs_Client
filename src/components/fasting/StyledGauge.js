import styled from "styled-components";

export const StyledGaugeWrapper = styled.div`
  position: relative;
  height: 100%;
  margin-top: 0.25rem;
  color: #333;

  .zero {
    position: absolute;
    bottom: 15%;
    left: 8.5%;
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
    top: 0;
    left: 50%;
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
    bottom: 17%;
    right: 7.5%;
    font-weight: 600;
    color: #666;

    transform: rotate(90deg);
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

  svg g.label text.segment-value {
    font-style: italic !important;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);

    z-index: 100 !important;
  }

  svg g.label text.segment-value:nth-child(2) {
    /* transform: translate(33%, -60%) rotate(30deg) !important; */
  }

  svg g.arc path.speedo-segment {
    fill: ${(props) => !props.today && "#cccccc55"};
  }
`;
