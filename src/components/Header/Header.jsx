import React from "react"

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button"
import { NavLink } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from "../../api/api"

const Header = (props) => {
    const onLogoutClkc = (e) => {
        logout()
        props.logoutAC()
    } 
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
                <Form className="d-flex"> {
                    !props.isAuth ? 
                        <NavLink style={{textDecoration: 'none'}} to='/login'>Log in</NavLink>
                    : 
                        <div>
                            <Navbar.Text>{props.userData.username}</Navbar.Text>
                            <Button onClick={onLogoutClkc} style={{margin: '0 0 0 20px'}} variant="outline-success">Log out</Button>
                        </div>
                    }
                </Form>
            </Container>
        </Navbar>
    </>
}

export default Header