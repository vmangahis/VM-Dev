import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo"><a href="google.com">VM</a></h1>
        <ul className="navbar">
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
                Skils
                </a>
            </li>

            <li>
                <a href="#contact">
                Contact
                </a>
            </li>
        </ul>
    </header>
  )
}

export default Header;