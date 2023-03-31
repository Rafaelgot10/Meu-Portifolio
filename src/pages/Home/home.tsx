import { StyledHome } from "./style";
import myImage from "../../assets/myImage.jpeg";
import { useEffect, useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const boxName = "Desenvolvedor Front-End";

  useEffect(() => {
    if (count <= 22) {
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
      <div className="myImage">
        <img src={myImage} alt="Imagem do Autor" />
      </div>

      <h1>
        Olá, sou o <span className="name">Rafael Rocha</span>
        <br />
        <span className="dev">{name}</span>
      </h1>
      <div className="buttons">
        <div>
          <a
            className="CV"
            href="../../assets/Currículo Rafael Rocha.pdf"
            download
          >
            {" "}
            Download CV
          </a>
        </div>
      </div>

      <div className="about">
        <h2>Sobre mim</h2>
        <p>
          Iniciando na área de programação Web com conhecimento nas linguagens
          (HTML | Java Script | CSS | JSON), conhecimento nos Softwares
          (Insomnia| VsCode | Figma) e também na área de automação industrial
          adquirindo uma boa comunicação, experiência de trabalho em equipe e
          proatividade. Sendo uma pessoa que gosta de estar sempre aprendendo
          para poder evoluir, antenado nas tecnologias do mercado.
        </p>
      </div>
    </StyledHome>
  );
}
