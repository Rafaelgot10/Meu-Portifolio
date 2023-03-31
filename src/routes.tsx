import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact/contact";
import { Skills } from "./pages/Skills/skills";
import { Home } from "./pages/Home/home";
import { Projects } from "./pages/Projects/projects";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
