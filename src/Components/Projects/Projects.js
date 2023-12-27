import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import './Projects.css'

export default function Projects({ projects }) {
    const displayProjects = projects?.map((eachProject) => <ListGroup.Item>{eachProject}</ListGroup.Item>)

    return (
        <div className='Projects'>
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>My Projects</Card.Title>
                    <Card.Text>
                        Check out some of the coding Projects I've done while I've been in bootcamp!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayProjects} 
                </ListGroup>
            </Card>
        </Container>
        </div>
    )
}

// Pokemonapi https://github.com/Csolly89/pokemonApi
// Music https://github.com/Csolly89/Music_library
// React a mole https://github.com/Csolly89/ReactAMole
// rest-rant https://github.com/Csolly89/RestRant
// milestone https://github.com/Csolly89/Milestone-Project-Cjs