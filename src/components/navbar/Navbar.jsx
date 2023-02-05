import * as BiIcons from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navPc">
      <a href="#" className="icon">
        <BiIcons.BiChip />
      </a>
      <ul>
        <li>
          <a href="#about-title" class="link">
            SOBRE MIM
          </a>
        </li>
        <li>
          <a href="#projects" class="link">
            PROJETOS
          </a>
        </li>
        <li>
          <a href="#contact" class="link">
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;