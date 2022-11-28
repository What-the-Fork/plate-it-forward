import React from 'react'
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link} from "react-router-dom";
import styles from "./components.module.css"

export function Navigation () {
    return (
        <Navbar className={'nav'} expand={'lg'} variant={'light shadow p-3'} sticky={'top'}>
            <Container fluid>
                {/* PUT LOGO HERE WHEN READY */}
                <Navbar.Brand><Link to={'/'}><Image width={'80'} src={'https://i.ibb.co/TKbdCPn/whiteplate.png" alt="plateIt'}></Image></Link></Navbar.Brand>
                <NavbarToggle aria-controls={'navbarScroll'} />
                <NavbarCollapse id={'navbarScroll'}>
                    {/* MS AUTO PUSHES LINKS TO RIGHT */}
                    <Nav className={'ms-auto'}>
                        <Link to={'/community-center'} className={'nav-link text-light'}>Community Centers</Link>
                        <Link to={'/partner-with-us'} className={'nav-link text-light'}>Partner with Us</Link>
                        <Link to={'/partner-signup'} className={'nav-link text-light'}>Partner Portal</Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}
