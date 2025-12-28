import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import logo from '../images/logo.png';
import { useHamburgerToggle } from '../hooks/useHamburgerToggle';
import { useHeaderColor } from '../hooks/useHeaderColor';
const Header = () => {
  const headerColor = useHeaderColor();
  const { hamburger, setHamburger } = useHamburgerToggle();

  return (
    <>
      <header className={headerColor ? 'header scroll' : 'header'}>
        <a href="#home" className="logo">
          <img src={logo} />
        </a>
        <MobileNav hamburger_state={hamburger} />
        <Hamburger toggle={setHamburger} hamburger_state={hamburger} />

        <nav className="navbar">
          <ul>
            <li>
              <a href="#hero-section">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
