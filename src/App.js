import NavBar from './Components/Navbar';
import { Home, About, Projects, Skills, Contact } from './Components/Barrel'
import './App.css'


function App() {

  const projects = ['Rest-Rant','React-a-Mole','RPS-Skynet','Pokemon-Api','Music-Library' ]

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
