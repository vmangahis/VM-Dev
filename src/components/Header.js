import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo"><a href="google.com">VM</a></h1>
        <ul className="navbar">
            <li>
                <a href="google.com">
                Home
                </a>
            </li>

            <li>
                <a href="google.com">
                About
                </a>
            </li>

            <li>
                <a href="google.com">
                Experience
                </a>
            </li>

            <li>
             <a href="google.com">
                Projects
                </a>
            </li>

            <li>
                <a href="google.com">
                Skils
                </a>
            </li>

            <li>
                <a href="google.com">
                Contact
                </a>
            </li>
        </ul>
    </header>
  )
}

export default Header;