import styled from "styled-components";

export const StyledFoother = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  bottom: -110;
  width: 100%;
  gap: 30px;
  padding: var(--space-defaut) 10%;
  background-color: var(--color-primary);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-defaut);
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  span {
    font-size: 2rem;
    text-align: center;
    color: var(--grey-100);
  }

  a {
    color: var(--grey-500);
  }

  a:hover {
    color: var(--grey-300);
  }

  @media (min-width: 380px) {
    flex-direction: row;
    bottom: 0;
  }
`;
