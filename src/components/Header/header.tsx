import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledHeader } from "./style";
import logo from "../../assets/logo.svg";

export function Header() {
  const [nav, setNav] = useState(false);

  return (
    <StyledHeader nav={nav}>
      <div className="navUp">
        <div className="logo">
          <h1>Rafael Rocha</h1>
        </div>

        <ul className="navUp__ul">
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/">
                {" "}
                Home{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/Projects">
                {" "}
                Projetos{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/Skills">
                {" "}
                Habilidades{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/Contact">
                {" "}
                Contato{" "}
              </Link>
            </Button>
          </li>
        </ul>

        <MenuIcon className="menuIcon" onClick={() => setNav(!nav)} />
      </div>

      <div className="navDown">
        <ul>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/">
                {" "}
                Home{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/Projects">
                {" "}
                Projetos{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/Skills">
                {" "}
                Habilidades{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="buttons" color="error" variant="contained">
              <Link onClick={() => setNav(false)} to="/Contact">
                {" "}
                Contato{" "}
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}
