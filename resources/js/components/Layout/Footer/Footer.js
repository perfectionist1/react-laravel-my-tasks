import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <h5 className="text-white">Copyright © 2020 | Mostafiz</h5>
            </Container>
        </Navbar>
    );
};

export default Footer;