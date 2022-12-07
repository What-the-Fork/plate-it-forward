import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {CenterSignInModal} from "./CenterSignInModal.jsx";
import {RestaurantSignInModal} from "./RestaurantSignInModal.jsx";


export function SignInLanding() {
    return (
        <>
            <Container className={'justify-content-center d-flex flex-column min-vh-100'}>
                <Col>
                    <Container className={'text-center'}>
                        <Image fluid={true} className={'p-4'} width={200} src={'https://i.ibb.co/ZJNPsqq/plateit.png'}
                               alt={'Plate Logo'}/>
                    </Container>
                    <Container className={'xl-4 justify-content-center text-center bg-light rounded mt-3 border'}>
                        <Container className={'text-center mb-5 p-5'}>
                            <h1 className={'display-2'}>Sign In</h1>
                            <p>Select an option to sign in:</p>
                        </Container>
                        <Row sm={12} className={'pb-5 justify-content-center'}>
                            <Col sm={5}>
                                <CenterSignInModal/>
                            </Col>
                            <Col sm={2}>
                                <p className={'align-middle mt-2'}>- OR -</p>
                            </Col>
                            <Col sm={5}>
                                <RestaurantSignInModal/>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Container>
        </>
    )
}