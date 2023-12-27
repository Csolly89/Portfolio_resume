import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Home, About, Projects, Skills, Contact } from './Barrel'

function NavBar () {
    const projects = ['Rest-Rant','React-a-Mole','RPS-Skynet','Pokemon-Api','Music-Library' ]

    return (
        <div>
            <Router>
                <Navbar className="bg-body-tertiary, justify-content-start">
                    <Container>
                        <Navbar.Brand href="/">Solly.Dev</Navbar.Brand>
                            <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/skills">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav.Item>
                            </Nav>
                    </Container>
                </Navbar>

                    <Routes>
                    <Route path="/" element={<Home /> }/>
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects projects={projects} />}  />
                    <Route path="/contact" element={<contact />} />
                    </Routes>  

            </Router>
        </div>
    )
}

export default NavBar