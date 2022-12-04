import React, {useEffect, useState} from 'react'
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link} from "react-router-dom";
import styles from "../components.module.css"
import {SignUpModal} from "./Sign-up/SignUpModal.jsx";
import {SignInModal} from "./Sign-in/SignInModal";
import {fetchAuth} from "../../../../store/auth.js";
import {useDispatch, useSelector} from "react-redux";

export function Navigation () {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth())
    }
    const inputs = []
    useEffect(effects, inputs)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const isModalOpen = () => {
        if (!auth) {
            return !auth;
        }
        else if (show === true && auth) {
            return true;
        }
    };
    return (
        <Navbar className={'nav'} expand={'lg'} variant={'light shadow p-3'} sticky={'top'}>
            <Container fluid>
                {/* PUT LOGO HERE WHEN READY */}
                <Navbar.Brand><Link to={'/'}><Image width={'80'} src={'https://i.ibb.co/TKbdCPn/whiteplate.png" alt="plateIt'}></Image></Link></Navbar.Brand>
                <NavbarToggle aria-controls={'navbarScroll'} />
                <NavbarCollapse id={'navbarScroll'}>
                    {/* MS AUTO PUSHES LINKS TO RIGHT */}
                    <Nav className={'ms-auto'}>
                        <Link to={'/community-center'} className={'nav-link'}>Community Centers</Link>
                        <Link to={'/partner-with-us'} className={'nav-link'}>Partner with Us</Link>
                        <Link to={'/center-signup'} className={'nav-link'}>Partner Portal</Link>

                        {auth ? (
                            <SignOut />
                        ) : (
                            isModalOpen() && (
                                <>
                                    {/*<SignUpModal />*/}
                                    <SignInModal show = {show} handleClose = {handleClose} handleShow = {handleShow} />
                                </>
                            ))}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}
