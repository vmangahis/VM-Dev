import {useState, useEffect}from 'react';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import logo from '../images/logo.png';
const Header = () => {
    const [hamburger, toggleHamburger]  = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [headerColor, changeHeaderColor] = useState(false);

    const scrollFunction = () => {
        const wndScroll = document.documentElement.scrollTop;
        const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProg = (wndScroll/h) * 100;

        setScrollY(scrollProg);
    }

    useEffect(() =>{
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);       
    }, []);

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
    <>
    <header className={headerColor ? "header scroll" : "header"}>
            <a href="#home" className="logo"><img src={logo} /></a>
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
        
    </header>
    <div className="prog-bar" id="pbar" style={{width : `${scrollY}%`}}></div>
    </>
  )
}

export default Header;