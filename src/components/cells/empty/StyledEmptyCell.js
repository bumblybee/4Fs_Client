import styled from "styled-components";

export const StyledEmptyCell = styled.div`
  width: 99%;
  height: 35px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-radius: 0;
  color: ${(props) => (props.blankCellVal ? "" : "#aaaaaacc")};
  text-align: ${(props) => props.aligntext};

  display: flex;
  justify-content: ${(props) => props.aligntext};
  align-items: center;

  :hover {
    background: ${(props) => (props.disabled ? "" : " #eee")};
    border-radius: 6px;
  }

  input {
    border: none;
    border-color: transparent;
    outline: none;
    width: inherit;
    height: inherit;
    text-align: ${(props) => props.aligntext};

    text-align-last: ${(props) => props.aligntext};
    white-space: normal;
    background: #eee;
    padding: 0.75rem;
    border-radius: 6px;
  }

  @media (max-width: 620px) {
    width: ${(props) => props.className === "system-practice" && "150px"};
    justify-content: ${(props) =>
      props.className === "system-practice" && "flex-end"};
  }
`;

export const StyledWrapper = styled.div``;
