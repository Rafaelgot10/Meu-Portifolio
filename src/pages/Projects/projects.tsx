import { StyledProjects } from "./style";
import Button from "@mui/material/Button";
import nukenzie from "../../assets/nukenzie.jpeg";
import kenzieHub from "../../assets/kenziehub.jpeg";
import kenzieBurguer from "../../assets/KenzieBurguer.jpeg";
import petShop from "../../assets/petShop.jpeg";

export function Projects() {
  return (
    <StyledProjects>
      <h1>Projetos</h1>
      <ul className="projectList">
        <li className="project">
          <div className="divUp">
            <div className="tumb">
              <img src={nukenzie} alt="" />
            </div>
            <div className="buttons">
              <Button className="buttons" variant="contained">
                <a target={"_blank"} href="https://y-self-two.vercel.app">
                  Deploy
                </a>
              </Button>

              <Button className="buttons" variant="contained">
                <a
                  target={"_blank"}
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie_Rafaelgot10"
                >
                  Repositório
                </a>
              </Button>
            </div>
          </div>

          <div className="informations">
            <h2>Nu Kenzie</h2>

            <p>
              No primeiro projeto utilizando React.Js confesso que tive
              dificuldades com as diferenças do React para o Javascript vanilla,
              mas logo depois que superei isso o projeto se desenvolveu bem.
            </p>
          </div>
        </li>

        <li className="project">
          <div className="divUp">
            <div className="tumb">
              <img src={kenzieHub} alt="" />
            </div>
            <div className="buttons">
              <Button className="buttons" variant="contained">
                <a
                  target={"_blank"}
                  href="https://react-entrega-kenzie-hub-rafaelgot10.vercel.app"
                >
                  Deploy
                </a>
              </Button>

              <Button className="buttons" variant="contained">
                <a
                  target={"_blank"}
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub__Rafaelgot10"
                >
                  Repositório
                </a>
              </Button>
            </div>
          </div>

          <div className="informations">
            <h2>KenzieHub</h2>

            <p>
              O projeto tinha uma proposta de um sistema de hospedagem para
              portifólios, que foi bem divertido de desenvolver juntamente com
              uma API, o que me possibilitou criar um ambiente para portifólios
              com cadastro e login.
            </p>
          </div>
        </li>

        <li className="project">
          <div className="divUp">
            <div className="tumb">
              <img src={kenzieBurguer} alt="" />
            </div>
            <div className="buttons">
              <Button className="buttons" variant="contained">
                <a
                  target={"_blank"}
                  href="https://kenzie-burguer-v2-template-rafaelgot10.vercel.app"
                >
                  Deploy
                </a>
              </Button>

              <Button className="buttons" variant="contained">
                <a
                  target={"_blank"}
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-burguer-v2-template_Rafaelgot10"
                >
                  Repositório
                </a>
              </Button>
            </div>
          </div>

          <div className="informations">
            <h2>Kenzie Burguer</h2>

            <p>
              Minha primeira aplicação em TypeScript foi um verdadeiro desafio
              já que não sabia nada sobre tipar os componentes e as variáveis no
              React, porém após o choque inicial, consegui me habituar ao
              framework, tendo constatado sua grande capacidade de impedir a
              ocorrência de erros.
            </p>
          </div>
        </li>

        <li className="project">
          <div className="divUp">
            <div className="tumb">
              <img src={petShop} alt="" />
            </div>
            <div className="buttons">
              <Button className="buttons" variant="contained">
                <a target={"_blank"} href="https://kzn-pet-shop.vercel.app">
                  Deploy
                </a>
              </Button>

              <Button className="buttons" variant="contained">
                <a
                  target={"_blank"}
                  href="https://github.com/KNZpet/KZN-pet-shop"
                >
                  Repositório
                </a>
              </Button>
            </div>
          </div>

          <div className="informations">
            <h2>KNZ Pet-Shop</h2>

            <p>
              Um projeto desenvolvido com ótimos devs, tendo como proposta o
              desenvolvimento de um protótipo de um e-commerce voltado para
              pets, foi uma ótima experiência com muitas trocas de informação e
              feedback.
            </p>
          </div>
        </li>
      </ul>
    </StyledProjects>
  );
}
