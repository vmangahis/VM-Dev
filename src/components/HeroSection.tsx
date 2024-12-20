import { ReactComponent as DevSVG } from '../images/web-dev.svg';
import Button from './Button';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const goToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const About = () => {
  const [typeEffect] = useTypewriter({
    words: ['Full-Stack Web Developer', 'Software Engineer'],
    loop: 0,
    typeSpeed: 30,
    deleteSpeed: 50,
  });
  return (
    <div className="hero-section" id="hero-section">
      <span className="hero-text-container">
        <div className="hero-text">
          Hi there, my name is<span className="name">Vince Baron Mangahis</span>
          I am a
          <p className="animation">
            <span className="web-developer">
              {typeEffect}
              <span className="cursor">
                <Cursor cursorStyle="_" />
              </span>
            </span>
          </p>
        </div>

        <Button
          button="hero-button"
          behavior={goToContact}
          buttonText="Contact me"
        />
      </span>

      <div className="svg-hero">
        <DevSVG />
      </div>
    </div>
  );
};

export default About;
