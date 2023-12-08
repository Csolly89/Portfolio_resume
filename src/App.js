// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Nav from 'react-bootstrap/Nav';

// import About from './Components/About';
// import Home from './Components/Home';
// import Projects from './Components/Projects';
// import Skills from './Components/Skills'

import NavBar from './Components/Navbar';
import './App.css'

function App() {

  const projects = ['Rest-Rant','React-a-Mole','RPS-Skynet','Pokemon-Api','Music-Library' ]

  return (
    <div className="App">
      
      <NavBar />
    </div>
  )
}

export default App;
