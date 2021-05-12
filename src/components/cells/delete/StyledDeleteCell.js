import styled from "styled-components";

export const StyledDeleteCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  position: relative;

  i {
    cursor: pointer;
    color: #c41e3abb;
  }
`;

export const StyledDeleteMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  padding: 1rem;
  z-index: 500;
  display: flex;
  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.09);
`;
