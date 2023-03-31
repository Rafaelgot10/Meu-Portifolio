import styled from "styled-components";

export const StyledHabilities = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-defaut);
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

  .skillsList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--space-defaut);
    max-width: 1000px;
    margin-bottom: var(--space-defaut);
  }

  .ability {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-defaut);
    border: solid 1px black;
    padding: var(--space-defaut);
    border-radius: var(--space-defaut);
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-defaut);
    width: 100px;
    height: 100px;
    border-radius: var(--space-defaut);
    background-color: var(--grey-100);
    background-repeat: no-repeat;
    background-position: center;
    transition: ease 0.3s;
  }
  .ability:hover {
    transform: scale(1.1);
  }
`;
