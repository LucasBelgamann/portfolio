import './Navbar.css';
import { SiAtom } from 'react-icons/si';

export default function Navbar() {
  return (
      <nav className="navbar">
        <div>
          <a href="#" className="logo">
            <SiAtom />
          </a>
        </div>
        <div>
          <ul>
            <a href="#aboutme">
                <li>SOBRE MIM</li>
            </a>
            <a href="#projects">
                <li>PROJETOS</li>
            </a>
            <a href="#contact">
                <li>CONTATO</li>
            </a>
          </ul>
        </div>
      </nav>
  );
}
