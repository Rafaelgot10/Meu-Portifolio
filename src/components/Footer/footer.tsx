import { StyledFoother } from "./style";
import myImage from "../../assets/myImage.jpeg";

export function Footer() {
  return (
    <StyledFoother>
      <div>
        <img src={myImage} alt="Imagem do Autor" />
        <span>Obrigado por ter vindo </span>
      </div>
      <div>
        <a href="https://github.com/Rafaelgot10/Meu-Portifolio" target="_blank">
          Repositório deste projeto
        </a>
      </div>
    </StyledFoother>
  );
}
