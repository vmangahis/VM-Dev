import React, {useState}from 'react';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';


const Header = () => {
    const [hamburger, toggleHamburger]  = useState(false);

    const [headerColor, changeHeaderColor] = useState(false);

    const changeColor = () =>{
        if(window.scrollY >= 100)
        {
            changeHeaderColor(true);
        }

        else{
            changeHeaderColor(false);
        }
        
    }

    window.addEventListener("scroll", changeColor);

  return (
    <header className={headerColor ? "header scroll" : "header"}>
        <h1 className="logo"><a href="#home">VM</a></h1>
            <MobileNav hamburger_state={hamburger} />
            <Hamburger toggle={toggleHamburger} hamburger_state={hamburger}/>
       
        <nav className="navbar">
            <ul>
            <li>
                <a href="#hero-section">
                Home
                </a>
            </li>

            <li>
                <a href="#about">
                Test
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


      

    </header>
  )
}

export default Header;