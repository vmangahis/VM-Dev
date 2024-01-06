const MobileNav = ({hamburger_state}) => {
  return (
    <nav className={hamburger_state ? "mobile-nav active" : "mobile-nav"}>
        <ul>
        <li>
            <a href="#hero-section">
                Home
                </a>
            </li>

            <li>
                <a href="#about">
                About
                </a>
            </li>

            <li>
                <a href="#experience">
                Experience
                </a>
            </li>

            <li>
             <a href="#projects">
                Projects
                </a>
            </li>

            <li>
                <a href="#skills">
                Skills
                </a>
            </li>

            <li>
                <a href="#contact">
                Contact
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default MobileNav