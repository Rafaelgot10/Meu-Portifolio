import styled from "styled-components";

export const StyledContact = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-defaut);
  width: 100%;
  max-width: 600px;
  animation-name: animacaoInicial;
  animation-duration: 1s;

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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-defaut);
    width: 100%;
  }

  form > div {
    width: 100%;
  }

  form > button {
    padding: 10px 30px;
    background-color: var(--color-primary);
  }

  form > button:hover {
    background-color: var(--color-primary-hover);
  }
`;
