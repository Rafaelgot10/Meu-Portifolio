import { StyledHome } from "./style";
import myImage from "../../assets/myImage.jpeg";
import { useEffect, useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const boxName = "Back-End em desenvolvimento.";

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
        <span>Desenvolvedor Front-End</span>
      </h1>
      <div className="myImage">
        <img src={myImage} alt="Imagem do Autor" />
      </div>
      <h1 className="dev">{name}</h1>
      <div className="buttons">
        <div>
          <a
            className="CV"
            href="https://1drv.ms/b/s!AjTA8TexTwP5lgLVyDn6rjZVoH_z?e=pnnjWM"
            type="application/jpeg"
            target="_blank"
          >
            Visualizar CV
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
