import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
        <nav className="footer-nav">
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
                </ul>
        </nav>

        <div className="sites">
        <IconContext.Provider value={{ size: "3em"}}>
            <a href="https://github.com/vmangahis">
                <FaGithub />
            </a>
            
            <a href="https://www.linkedin.com/in/vince-baron-mangahis-467b50221/">
                <FaLinkedin />
            </a>
        </IconContext.Provider>
        </div>

        <p className="copyright">&copy; 2023 VMangahis</p>

    </footer>
  )
}

export default Footer