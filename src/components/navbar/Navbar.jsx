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
            <a href="#">
                <li>SOBRE MIM</li>
            </a>
            <a href="#">
                <li>PROJETOS</li>
            </a>
            <a href="#">
                <li>COMPETÊNCIAS</li>
            </a>
            <a href="#">
                <li>CONTATO</li>
            </a>
          </ul>
        </div>
      </nav>
  );
}
