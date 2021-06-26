import styled from "styled-components";

export const StyledDeleteCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  position: relative;
  width: 100%;
  background: inherit;

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

    span {
      display: none;
    }
  }

  @media (max-width: 620px) {
    div.delete-wrapper {
      span {
        display: block;
        font-size: 0.95rem;
        padding-top: 0.35rem;
        color: #db2828;
        font-weight: 600;
        cursor: pointer;
      }
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
    button {
      font-size: 0.825rem !important;
    }
    top: -1.2rem;
    right: 5.75rem;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    right: 0.5rem;
    top: -0.25rem;
  }
`;
