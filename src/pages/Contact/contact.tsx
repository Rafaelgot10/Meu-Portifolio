import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { StyledContact } from "./style";

export function Contact() {
  return (
    <StyledContact>
      <h1>Contato</h1>

      <form action="https://formsubmit.co/Rafaelgot10@gmail.com" method="POST">
        <TextField
          label="Nome"
          color="success"
          name="nome"
          type={"text"}
          variant="outlined"
          placeholder="Seu nome aqui..."
        />

        <TextField
          label="Email"
          name="email"
          type={"email"}
          color="success"
          variant="outlined"
          placeholder="Seu email aqui..."
        />

        <TextField
          label="Assunto"
          color="success"
          type={"text"}
          name="subject"
          variant="outlined"
          placeholder="Do que se trata..."
        />

        <TextField
          label="Mensagem"
          multiline
          type={"text"}
          name="assunto"
          color="success"
          variant="outlined"
          rows="5"
        />

        <Button className="buttons" type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </StyledContact>
  );
}
