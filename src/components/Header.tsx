import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import logo from '../images/logo.png';
import useScrollProgress from '../hooks/useScrollProgress';
const Header = () => {
  const { hamburger, scrollY, headerColor, toggleHamburger } =
    useScrollProgress();

  return (
    <>
      <header className={headerColor ? 'header scroll' : 'header'}>
        <a href="#home" className="logo">
          <img src={logo} />
        </a>
        <MobileNav hamburger_state={hamburger} />
        <Hamburger toggle={toggleHamburger} hamburger_state={hamburger} />

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

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className="prog-bar"
        id="pbar"
        style={{ width: `${scrollY}%` }}
      ></div>
    </>
  );
};

export default Header;
