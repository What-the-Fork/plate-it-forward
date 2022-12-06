import React from 'react'
// , {useEffect, useState}
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link} from "react-router-dom";
import styles from "../components.module.css"
// import {fetchAuth} from "../../../../store/auth.js";
// import {useDispatch, useSelector} from "react-redux";

export function Navigation () {

    // const auth = useSelector(state => state.auth)
    // const dispatch = useDispatch()
    // const effects = () => {
    //     dispatch(fetchAuth())
    // }
    // const inputs = []
    // useEffect(effects, inputs)

    // const [show, setShow] = useState(false)
    //
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)


    return (
        <Navbar className={'nav'} expand={'lg'} variant={'light shadow p-3'} sticky={'top'}>
            <Container fluid>
                {/* PUT LOGO HERE WHEN READY */}
                <Navbar.Brand><Link to={'/'}><Image width={'80'} src={'https://i.ibb.co/7SKwHPn/whiteplate-logo.png" alt="plateIt'}></Image></Link></Navbar.Brand>
                <NavbarToggle aria-controls={'navbarScroll'} />
                <NavbarCollapse id={'navbarScroll bg-light'}>
                    {/* MS AUTO PUSHES LINKS TO RIGHT */}
                    <Nav className={'ms-auto'}>
                        <Link to={'/community-center'} className={'nav-link text-light display-6'}>Community Centers</Link>
                        <Link to={'/partner-with-us'} className={'nav-link text-light display-6'}>Partner with Us</Link>
                        <Link to={'/sign-in'} className={'nav-link text-light display-6'}>Sign In</Link>

                        {/*{auth ? (*/}
                        {/*    <SignOut />*/}
                        {/*) : (*/}
                        {/*    */}
                        {/*    ))}*/}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}
