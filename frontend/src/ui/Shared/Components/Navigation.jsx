import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link} from "react-router-dom";

export function Navigation () {
    return (
        <Navbar bg={'light'} expand={'lg'} variant={'light'} sticky={'top'}>
            <Container fluid>
                {/* PUT LOGO HERE WHEN READY */}
                <Navbar.Brand><Link to={'/'}>PIF</Link></Navbar.Brand>
                <NavbarToggle aria-controls={'navbarScroll'} />
                <NavbarCollapse id={'navbarScroll'}>
                    {/* MS AUTO PUSHES LINKS TO RIGHT */}
                    <Nav className={'ms-auto'}>
                        <Link to={'/community-center'} className={'nav-link'}>Community Centers</Link>
                        <Link to={'/partner-with-us'} className={'nav-link'}>Partner with Us</Link>
                        <Link to={'/center-signup'} className={'nav-link'}>Partner Portal</Link>
                        <Link to={'/restaurant-signup'} className={'nav-link'}>Restaurant SignUp</Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}