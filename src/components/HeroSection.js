import React from 'react';
import {ReactComponent as DevSVG} from '../images/web-dev.svg';
import Button from './Button';


const About = () => {
  return (
    <div className="hero-section" id="hero-section">  


            <div className="hero-text-container">
              <p className="hero-text">
                Hi there, my name is<h1 className="name">Vince Baron Mangahis</h1>
                <p>your</p>



                <div className="animation">
                 <span className="web-developer">Software Developer</span>
                </div>   
              </p>

              <Button button="hero-button" buttonText="Contact me"/> 
            </div>
              
            <div className="svg-hero">
            <DevSVG />
            </div>
            
    </div>
    
  )
}

export default About