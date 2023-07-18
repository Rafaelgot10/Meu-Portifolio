import { StyledHabilities } from "./style";
import css from "../../assets/css.png";
import github from "../../assets/github.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import python from "../../assets/python.png";
import postgreSQL from "../../assets/postegreSQL.png";
import node from "../../assets/node.png";
import django from "../../assets/django.png";
import ladder from "../../assets/clp.png";
// import style from "../../assets/styled.png";
import ts from "../../assets/typescript.png";

export function Skills() {
  return (
    <StyledHabilities>
      <h1>Habilidades</h1>
      <ul className="skillsList">
        <li className="ability">
          <img src={html} alt="Icone da tecnologia HTML" />

          <div className="information">
            <h2>HTML</h2>
            <p className="hidden">
              O HTML é uma linguagem de marcação de texto utilizada na
              construção de páginas na web
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={css} alt="Icone da tecnologia CSS" />
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
          <img src={js} alt="Icone da tecnologia JavaScript" />

          <div className="information">
            <h2>JavaScript</h2>
            <p>
              JavaScript é uma linguagem de programação interpretada
              estruturada, de script em alto nível com tipagem dinâmica fraca e
              multiparadigma.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={ts} alt="Icone da tecnologia TypeScript" />

          <div className="information">
            <h2>TypeScript</h2>
            <p>
              O TypeScript é uma linguagem de programação de código aberto
              desenvolvida pela Microsoft. É um superconjunto sintático estrito
              de JavaScript e adiciona tipagem estática opcional à linguagem.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={react} alt="Icone da tecnologia React JS" />

          <div className="information">
            <h2>React JS</h2>
            <p>
              O React é uma biblioteca JavaScript de código aberto com foco em
              criar interfaces de usuário em páginas web
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={git} alt="Icone da tecnologia Git" />

          <div className="information">
            <h2>Git</h2>
            <p>
              O Git é um sistema de versionamento de projeto usado para o
              auxilio e acompanhamento do projeto
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={github} alt="Icone da tecnologia Github" />

          <div className="information">
            <h2>Github</h2>
            <p>
              O Github é uma plataforma de hospedagem de código-fonte e arquivos
              com controle de versão usando o git.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={python} alt="Icone da tecnologia TypeScript" />

          <div className="information">
            <h2>Python</h2>
            <p>
              Python é uma linguagem de programação de alto nível, interpretada
              de script, imperativa, orientada a objetos, funcional, de tipagem
              dinâmica e forte.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={postgreSQL} alt="Icone da tecnologia TypeScript" />

          <div className="information">
            <h2>PostgreSQL</h2>
            <p>
              PostgreSQL é um sistema gerenciador de banco de dados objeto
              relacional, desenvolvido como projeto de código aberto.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={node} alt="Icone da tecnologia TypeScript" />

          <div className="information">
            <h2>Node.js</h2>
            <p>
              O Node.js é um ambiente de execução do código JavaScript do lado
              servidor (server side), que na prática se reflete na possibilidade
              de criar aplicações sem a necessidade do navegador.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={django} alt="Icone da tecnologia TypeScript" />

          <div className="information">
            <h2>Django</h2>
            <p>
              Django é um framework para desenvolvimento rápido para web,
              escrito em Python, que utiliza o padrão model-template-view.
            </p>
          </div>
        </li>

        <li className="ability">
          <img src={ladder} alt="Icone da tecnologia TypeScript" />

          <div className="information">
            <h2>Linguagem ladder</h2>
            <p>
              A linguagem Ladder foi originalmente desenvolvida para construir
              circuitos de relés, utilizados em processos industriais.
            </p>
          </div>
        </li>
      </ul>
    </StyledHabilities>
  );
}
