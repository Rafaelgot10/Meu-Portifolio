import styled from "styled-components";

export const StyledProjects = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: animacaoInicial;
  animation-duration: 1s;
  padding: var(--space-defaut);
  width: 100%;
  gap: var(--space-defaut);

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

  .projectList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--space-defaut);
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 450px;
    min-height: 500px;
    height: auto;
    border: solid 1px black;
    border-radius: var(--space-defaut);
    padding: var(--space-defaut);
    gap: var(--space-defaut);
  }

  .divUp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-defaut);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-defaut);
  }

  .buttons > button {
    width: 150px;
    background-color: var(--color-primary);
  }

  .buttons > button:hover {
    background-color: var(--color-primary-hover);
  }

  .tumb {
    width: 200px;
    height: 200px;
    border-radius: var(--space-defaut);
  }

  .tumb > img {
    width: 100%;
    height: 100%;
    border-radius: var(--space-defaut);
  }
`;
