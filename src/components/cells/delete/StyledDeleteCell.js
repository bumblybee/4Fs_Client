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
  }

  @media (max-width: 620px) {
    width: 100%;
    height: 100%;

    i {
      // May need to add class here and do differently for sleep vs system
      margin-bottom: 0.5rem;
    }
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

  @media (max-width: 620px) {
    right: 1.25rem;
    top: 0.75rem;
  }
`;
