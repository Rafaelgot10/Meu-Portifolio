import { StyledHabilities } from "./style";
import css from "../../assets/css.svg";
import github from "../../assets/github.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.svg";
import html from "../../assets/html.svg";
import style from "../../assets/styled.svg";
import ts from "../../assets/typescript.svg";

export function Skills() {
  return (
    <StyledHabilities>
      <h1>Habilidades</h1>
      <ul className="skillsList">
        <li className="ability">
          <div className="icon ">
            <img src={html} alt="Icone da tecnologia HTML" />
          </div>
          <div className="information">
            <h2>HTML</h2>
            <p className="hidden">
              O HTML é uma linguagem de marcação de texto utilizada na
              construção de páginas na web
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill2">
            <img src={css} alt="Icone da tecnologia CSS" />
          </div>
          <div className="information">
            <h2>CSS</h2>
            <p>
              O CSS é um mecanismo para adicionar estilos a uma página web,
              aplicado diretamente nas tags HTML ou ficar contido dentro das
              tags
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill3">
            <img src={js} alt="Icone da tecnologia JavaScript" />
          </div>
          <div className="information">
            <h2>JavaScript</h2>
            <p>
              O JavaScript é uma linguagem de programação. Juntamente com HTML e
              CSS, é uma das três principais tecnologias da web
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill4">
            <img src={react} alt="Icone da tecnologia React JS" />
          </div>
          <div className="information">
            <h2>React JS</h2>
            <p>
              O React é uma biblioteca JavaScript de código aberto com foco em
              criar interfaces de usuário em páginas web
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill5">
            <img src={git} alt="Icone da tecnologia Git" />
          </div>
          <div className="information">
            <h2>Git</h2>
            <p>
              O Git é um sistema de versionamento de projeto usado para o
              auxilio e acompanhamento do projeto
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill6">
            <img src={github} alt="Icone da tecnologia Github" />
          </div>
          <div className="information">
            <h2>Github</h2>
            <p>
              O Github é uma plataforma de hospedagem de código-fonte e arquivos
              com controle de versão usando o git.
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill7">
            <img src={style} alt="Icone da tecnologia Styled-Components" />
          </div>
          <div className="information">
            <h2>Styles-Components</h2>
            <p>
              O Styled-Components é uma biblioteca JavaScript que utiliza o
              conceito de CSS-in-JS, ou seja, que nos permite escrever CSS
              dentro do JavaScript
            </p>
          </div>
        </li>

        <li className="ability">
          <div className="icon skill8">
            <img src={ts} alt="Icone da tecnologia TypeScript" />
          </div>
          <div className="information">
            <h2>TypeScript</h2>
            <p>
              O TypeScript é uma linguagem de programação de código aberto
              desenvolvida pela Microsoft. É um superconjunto sintático estrito
              de JavaScript e adiciona tipagem estática opcional à linguagem.
            </p>
          </div>
        </li>
      </ul>
    </StyledHabilities>
  );
}
