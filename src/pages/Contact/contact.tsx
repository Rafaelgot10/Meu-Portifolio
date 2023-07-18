import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { StyledContact } from "./style";

export function Contact() {
  return (
    <StyledContact>
      <h1>Contato</h1>

      <div className="container">
        <div className="left">
          <p>
            Vamos conversar e <span>desenvolver soluções para sua empresa</span>
            , juntos!
          </p>
        </div>

        <div className="right">
          <ul>
            <li>
              <div className="icon whatsapp">
                <FaWhatsapp />
              </div>
              <div className="text">
                <h3>Meu Whatsapp</h3>
                <p>
                  Estou disponível para um bate-papo por voz, vamos falar sobre
                  criatividade juntos?
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=+55+11958696248&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                  target={"_blank"}
                >
                  Me envie uma mensagem
                </a>
              </div>
            </li>

            <li>
              <div className="icon email">
                <FaEnvelopeOpen />
              </div>
              <div className="text">
                <h3>Meu Email</h3>
                <p>
                  Envie-me um e-mail relatando feedbacks, sugestões e ideias
                </p>
                <a href="mailto:rafaelgot10@outlook.com" target={"_blank"}>
                  Me envie um email
                </a>
              </div>
            </li>

            <li>
              <div className="icon linkedin">
                <FaLinkedin />
              </div>
              <div className="text">
                <h3>Meu Linkedin</h3>
                <p>
                  Podemos criar interações mais constantes assim como uma rede
                  de compartilhamento
                </p>
                <a
                  href="https://www.linkedin.com/in/rafaelgot10/"
                  target={"_blank"}
                >
                  Acesse o LinkedIn agora
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledContact>
  );
}
