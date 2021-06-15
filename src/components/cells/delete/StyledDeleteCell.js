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
    right: 0;
  }
`;
