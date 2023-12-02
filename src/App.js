import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills'

function App() {

  const projects = ['Rest-Rant','React-a-Mole','RPS-Skynet','Pokemon-Api','Music-Library' ]

  return (
    <div className="App">
      <Router>
        <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href='/'eventKey='/'> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/about' eventKey="/about"> About Me </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/skills' eventKey="/skills"> Skills </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/projects' eventKey="/projects"> Projects </Nav.Link>
                </Nav.Item>
          </Nav>
          <div className="display">
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" render={() => <Projects projects={projects}/>}  />
            </Routes>  
          </div> 

      </Router>
    </div>
  )
}

export default App;
