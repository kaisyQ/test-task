import React from "react"

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/news'>
                        <Nav.Link>News</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/profile'>
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default Header