import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const StyledFTabBar = styled.div`
  position: relative;
  background: #daddde;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 1px 5px 1px rgba(0, 0, 0, 0.2),
    inset 0 -1px 4px 1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100px;

  .resources {
    position: absolute;
    top: 40%;
    right: 27%;
    font-size: 1.2rem;
    font-weight: ${(props) => (props.path === "resources" ? "600" : "500")};
    border-bottom: ${(props) =>
      props.path === "resources"
        ? "2px solid #2b73ce"
        : "2px solid transparent"};
    color: #2b73ce;
  }

  @media (max-width: 1024px) {
    .resources {
      right: 8%;
      top: 44%;
    }
  }

  @media (max-width: 768px) {
    /* height: 110px; */

    .resources {
      top: auto;
      bottom: 1%;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1rem;
    }
  }

  @media (max-width: 620px) {
    .resources {
      bottom: 1%;
      font-size: 0.975rem;
    }
  }

  @media (max-width: 320px) {
    height: 96px;

    .resources {
      bottom: 1.5%;
    }
  }
`;

export const StyledFMenu = styled(Menu)`
  border: 2px solid #2b73ce !important;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6) !important;
  max-width: 90% !important;
  margin: 0 !important;

  .item {
    padding: 1.25rem 1.75rem !important;
    border-radius: 0 !important;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 400 !important;
    margin: 0 !important;
  }

  .item:not(.active) {
    color: #2b73ce !important;
  }

  .item.active {
    background: #2b73ce !important;
    color: hsl(217, 49%, 99%) !important;
    font-weight: 500 !important;
  }

  @media (max-width: 768px) {
    max-width: 100% !important;

    .item {
      padding: 1rem 1.75rem !important;
      font-size: 0.9679rem !important;
    }
  }

  @media (max-width: 620px) {
    .item {
      padding: 1rem 0.66rem !important;
    }
  }

  @media (max-width: 385px) {
    .item {
      padding: 1rem 0.4rem !important;
    }
  }

  @media (max-width: 320px) {
    .item {
      padding: 0.75rem 0.25rem !important;
      font-size: 0.9625rem !important;
    }
  }
`;
