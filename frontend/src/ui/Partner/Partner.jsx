import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {SignUpModal} from "../Shared/Components/Navigation/Sign-up/SignUpModal.jsx";

export function Partner() {
    return(
        <>
            <Container lg={3}>
                <h1 className={'display-1 text-center mb-5'}>Partner with Us</h1>
                    <Row className={'gx-md-1 gy-5'}>
                        <Col md={5} className={'text-center'}>
                            <Image fluid={true} src={'https://www.placecage.com/c/325/325'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={7} className={'fs-5'}>
                            <h3>What We Do</h3>
                            <p>Bacon ipsum dolor amet frankfurter andouille ground round t-bone cupim pork chop. Tail pork cupim porchetta drumstick shoulder chuck salami burgdoggen beef ribs pork belly beef. Flank andouille pork chop, bresaola fatback prosciutto shankle ball tip.</p>
                        </Col>
                    </Row>
                    {/* NEEDS ALL (EXCEPT PADDING AND MB) TO BE CENTERED */}
               <Row>
                <SignUpModal />
               </Row>
            </Container>
        </>
    )
}