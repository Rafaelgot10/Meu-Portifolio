import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  animation-name: animacaoInicial;
  animation-duration: 1s;

  .name {
    color: var(--color-primary);
  }

  .dev::after {
    content: "|";
    margin-left: 3px;
    opacity: 1;
    animation: pisca 0.7s infinite;
  }

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

  @keyframes pisca {
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .myImage {
    width: 250px;
    height: 250px;
    margin: 20px;
    border-radius: var(--space-defaut);
  }

  .myImage > img {
    width: 250px;
    height: 250px;
    border-radius: var(--space-defaut);
  }

  h1 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
  }

  .CV {
    width: 100%;
    padding: 10px 20px;
    font-size: 1.5rem;
    background-color: var(--color-primary);
    text-align: center;
    max-width: 200px;
    border-radius: 20px;

    cursor: pointer;
  }

  .CV:hover {
    background-color: var(--color-primary-hover);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .about {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 10px;
    padding: 10px 10px;
  }

  .about > p {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;
