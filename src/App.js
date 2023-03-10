import React  from 'react' ;
import ResponsiveAppBar from "./components/NavBar"
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Hero from './components/Hero';
import './App.css'
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return(
    <div>
      < ResponsiveAppBar />
      < Home />
    </div>
  )
}

export default App;