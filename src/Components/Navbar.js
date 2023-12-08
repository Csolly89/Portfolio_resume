import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

import About from './About';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills'

function NavBar () {

    const projects = ['Rest-Rant','React-a-Mole','RPS-Skynet','Pokemon-Api','Music-Library' ]

    return (
        <div>
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
                    <Route path="/" element={<Home /> }/>
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects projects={projects} />}  />
                    </Routes>  
                </div> 

            </Router>
        </div>
    )
}

export default NavBar