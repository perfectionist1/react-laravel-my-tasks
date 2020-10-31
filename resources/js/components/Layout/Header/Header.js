import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [URL, setURL] = useState("/myTasks/");
    return (       
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link ><Link to={`${URL}`}>Home</Link></Nav.Link>
                    <Nav.Link ><Link to={`${URL}about`}>About</Link></Nav.Link>
                    <Nav.Link ><Link to={`${URL}contact`}>Contact</Link></Nav.Link>
                    
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> 
            </Container>            
        </Navbar>             
    );
};

export default Header;