import { StyledHome } from "./style";
import myImage from "../../assets/myImage.jpeg";
import { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";

export function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const boxName = "Desenvolvedor Web FullStack.";

  useEffect(() => {
    if (count <= 27) {
      const timer = setInterval(() => {
        setName(name + boxName.charAt(count));

        if (count < boxName.length) {
          setCount(count + 1);
        }
      }, 150);

      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <StyledHome>
      <h1>
        Olá, sou o <span className="name">Rafael Rocha</span>
        <br />
      </h1>
      <div className="myImage">
        <img src={myImage} alt="Imagem do Autor" />
      </div>
      <h1 className="dev">{name}</h1>

      <div className="buttons">
        <a
          className="CV"
          href="https://1drv.ms/b/s!AjTA8TexTwP5lgLVyDn6rjZVoH_z?e=pnnjWM"
          type="application/jpeg"
          target="_blank"
        >
          Visualizar CV
        </a>

        <a
          className="git"
          href="https://github.com/Rafaelgot10"
          target={"_blank"}
        >
          {" "}
          <AiOutlineGithub />
        </a>
      </div>

      <div className="about">
        <h2>Sobre mim</h2>
        <p>
          Iniciando na área de programação Web com conhecimento nas Tecnologias
          font-end (Typescript| React.js | CSS), e back-end (Node.js, python,
          django)e também na área de automação industrial adquirindo uma boa
          comunicação, experiência de trabalho em equipe, e proatividade. Sendo
          uma pessoa que gosta de estar sempre aprendendo para poder evoluir,
          antenado nas tecnologias do mercado. Atualmente estudo na Kenzie
          Academy Brasil onde desenvolvo projetos semanalmente que abrangem
          desenvolvimento de interfaces responsivas utilizando React.js e
          vercionando os mesmos com Git e GitHub..
        </p>
      </div>
    </StyledHome>
  );
}
