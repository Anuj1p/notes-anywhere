import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container >
                <Navbar.Brand>
                    <Link className='link-line' to='/'>
                        Notes Anywhere
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='headerCollapse'>
                    <Nav className='m-auto'>
                        <Form>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                            />
                        </Form>
                    </Nav>
                    <Nav
                        style={{ maxHeight: '170px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link className='link-line' to='/mynotes'>
                                My Notes
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Anuj" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header