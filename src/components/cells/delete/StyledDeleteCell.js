import styled from "styled-components";

export const StyledDeleteCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  position: relative;
  width: 100%;

  i {
    cursor: pointer;

    :hover {
      color: #c91e14 !important;
    }
  }

  div.delete-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: none;
  }

  @media (max-width: 620px) {
    justify-content: ${(props) => props.className === "sleep" && "flex-end"};

    span.sleep {
      display: block;
      font-size: 0.9rem;
      padding-top: 0.35rem;
      color: #db2828;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const StyledDeleteMenu = styled.div`
  position: absolute;
  top: -0.425rem;
  right: 1.75rem;
  background: #fff;
  padding: 1rem;
  z-index: 500;
  display: flex;

  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.09);

  @media (max-width: 620px) {
    right: ${(props) => (props.className === "sleep" ? "8rem" : "0")};
  }
`;
