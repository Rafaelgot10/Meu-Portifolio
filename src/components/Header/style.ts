import styled, { css } from "styled-components";

interface IHeaderProps {
  nav: boolean;
}

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 16px 32px;
  background: rgba(196, 196, 196, 0.11);
  border-bottom: solid 1px var(--grey-600);
  backdrop-filter: blur(10px);
  z-index: 10;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .logo > img {
    width: 50px;
    height: 50px;
  }

  a {
    width: 100%;
    height: 100%;
  }

  ${({ nav }: IHeaderProps) => {
    if (nav) {
      return css`
        .navDown {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      `;
    } else {
      return css`
        .navDown {
          display: none;
        }
      `;
    }
  }}

  .navDown  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .navDown > ul > li {
    width: 100%;

    text-align: center;
  }

  .navUp {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navUp__ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-defaut);
  }

  .menuIcon {
    display: flex;
  }

  .navUp__ul {
    display: none;
  }

  button {
    background-color: var(--color-primary);
  }

  button:hover {
    background-color: var(--color-primary-hover);
  }

  .navDown > ul > li > button {
    width: 150px;
  }

  @media (min-width: 770px) {
    .menuIcon {
      display: none;
    }

    .navUp__ul {
      display: flex;
    }

    .navDown {
      display: none;
    }
  }
`;
