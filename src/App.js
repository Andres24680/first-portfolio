import React  from 'react' ;
import ResponsiveAppBar from "./components/NavBar"
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Hero from './components/Hero';
import './App.css'

function App() {
  return(
    <div>
      < ResponsiveAppBar />
      <Hero />
      < About />
      < Projects />
      <Contact />
    </div>
  )
}

export default App;