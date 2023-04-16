import { StyledFoother } from "./style";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export function Footer() {
  return (
    <StyledFoother>
      <a href="https://www.linkedin.com/in/rafaelgot10/" target={"_blank"}>
        {" "}
        <FaLinkedin /> Linkedin
      </a>

      <a href="https://github.com/Rafaelgot10" target={"_blank"}>
        {" "}
        <AiOutlineGithub /> GitHub
      </a>

      <a href="mailto:rafaelgot10@outlook.com" target={"_blank"}>
        {" "}
        <SiGmail /> Email
      </a>
    </StyledFoother>
  );
}
