import styled from "styled-components";

export const StyledFoother = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: -110;
  width: 100%;
  gap: 50px;
  padding: var(--space-defaut);
  background-color: var(--color-primary);

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: white;
  }

  svg {
    font-size: 1.5rem;
  }

  @media (min-width: 380px) {
    flex-direction: row;
    bottom: 0;
  }
`;
