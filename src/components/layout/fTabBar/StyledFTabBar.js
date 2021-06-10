import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const StyledFTabBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #daddde;
  box-shadow: inset 0 1px 5px 1px rgba(0, 0, 0, 0.2),
    inset 0 -1px 4px 1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100px;
  position: relative;

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
      right: 9%;
      top: 40%;
    }
  }

  @media (max-width: 768px) {
    height: 110px;

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
    height: 90px;

    .resources {
      bottom: 3%;
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
  max-width: 32% !important;
  height: 89%;
  margin: 0 !important;

  .item {
    border-radius: 0 !important;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 400 !important;
    /* margin: 0 !important; */
  }

  .item:not(.active) {
    color: #2b73ce !important;
  }

  .item.active {
    background: #2b73ce !important;
    color: hsl(217, 49%, 99%) !important;
    font-weight: 500 !important;
  }

  .item:last-child.active {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media (max-width: 1024px) {
    max-width: 57% !important;
  }

  @media (max-width: 768px) {
    height: 75%;
    max-width: 80% !important;
  }

  @media (max-width: 620px) {
    height: 80%;
    max-width: 100% !important;

    margin: 0 0em 1rem !important;
    .item {
    }
  }

  @media (max-width: 385px) {
    .item {
    }
  }

  @media (max-width: 320px) {
    .item {
    }
  }
`;
