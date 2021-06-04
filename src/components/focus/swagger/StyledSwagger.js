import styled from "styled-components";

export const StyledSwaggerTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1027px) {
    flex-direction: column;
  }
`;

export const StyledSectionHeaderText = styled.h4`
  text-align: center;
  margin: -1.75rem 0 2.5rem;
`;
