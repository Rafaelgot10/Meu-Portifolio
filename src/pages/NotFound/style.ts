import styled from "styled-components";

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-duration: 1s;
  gap: 3rem;
  width: 100%;
  animation-name: animacaoInicial;

  @keyframes animacaoInicial {
    from {
      opacity: 0;
      top: -25px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }

  h1 {
    font-size: 5rem;
    margin-top: 5rem;
    color: var(--grey-100);
    text-align: center;
  }

  span {
    color: var(--grey-200);
    text-align: center;
  }

  p {
    color: var(--grey-200);
    text-align: center;
  }

  a {
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 00;
    color: var(--grey-0);
    background-color: var(--color-primary);
  }

  a:hover {
    background-color: var(--color-primary-hover);
  }
`;
