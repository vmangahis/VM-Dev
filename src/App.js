import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
       
    </div>
  );
}

export default App;
