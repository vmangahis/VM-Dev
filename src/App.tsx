import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
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
        <Footer />
    </div>
  );
}

export default App;
