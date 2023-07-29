import styled from "styled-components";

export const StyledContact = styled.div`
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

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
  }

  .right > ul {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 350px;
    max-height: 150px;
    gap: 20px;
  }

  .text > a {
    color: var(--grey-400);
  }

  .text > a:hover {
    color: var(--grey-100);
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: var(--grey-100);
    width: 70px;
    height: 70px;
  }

  .icon svg {
    width: 50%;
    height: 50%;
  }

  .whatsapp {
    background-color: var(--color-whatsapp);
  }

  .email {
    background-color: var(--color-email);
  }

  .linkedin {
    background-color: var(--color-linkedin);
  }

  .left > p {
    font-size: 2rem;
    text-align: center;
  }

  .left > p > span {
    color: var(--color-primary);
  }

  @media (min-width: 500px) {
    li {
      flex-direction: row;
    }
  }
`;
