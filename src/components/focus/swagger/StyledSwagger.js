import styled from "styled-components";

export const StyledSwaggerTableContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1027px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > div {
      margin-bottom: 1rem;
      width: 100%;
    }
  }
`;

export const StyledSectionHeaderText = styled.h4`
  text-align: center;
  margin: -1.75rem 0 2.25rem !important;
`;
