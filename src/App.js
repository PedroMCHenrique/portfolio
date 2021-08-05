import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
