import styled from "styled-components";

export const StyledEmptyCell = styled.div`
  width: 95%;
  cursor: pointer;
  border-radius: 0;
  min-height: 40px;
  color: ${(props) => (props.blankCellVal ? "" : "#aaaaaacc")};
  padding-left: 0.25rem;
  text-align: ${(props) => props.alignText};

  display: flex;
  justify-content: ${(props) => props.aligntext};
  align-items: center;

  :hover {
    /* background: #eee;
    border-radius: 6px; */
    /* border-bottom: 2px solid #eee; */
  }

  input {
    border: none;
    border-color: transparent;
    outline: none;
    width: inherit;
    height: inherit;
    text-align: ${(props) => props.aligntext};
    /* margin: 0 auto; */
    text-align-last: center;
    white-space: normal;
    background: #eee;
    padding: 0.75rem;
    border-radius: 6px;
  }
`;

export const StyledWrapper = styled.div``;
