import { Link } from "react-router-dom";
import { StyledNotFound } from "./style";

export function NotFound() {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <span>Oooops, página não encontrada</span>
      <p>Desculpe mas a página requisitada não foi encontrada </p>
      <Link to="/">Home</Link>
    </StyledNotFound>
  );
}
