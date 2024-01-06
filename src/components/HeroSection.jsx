import React from 'react';
import {ReactComponent as DevSVG} from '../images/web-dev.svg';
import Button from './Button';


const About = () => {
  return (
    <div className="hero-section" id="hero-section">  
            <span className="hero-text-container">
              <p className="hero-text">
                Hi there, my name is<span className="name">Vince Baron Mangahis</span>
                I am a
                <span className="animation">
                 <span className="web-developer">Full-Stack Web Developer</span>
                </span>   
              </p>

              <Button button="hero-button" buttonText="Contact me"/> 
            </span>
              
            <div className="svg-hero">
            <DevSVG />
            </div>
            
    </div>
    
  )
}

export default About