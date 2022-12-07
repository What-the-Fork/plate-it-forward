import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {SignUpModal} from "../Shared/Components/Navigation/Sign-up/SignUpModal.jsx";

export function Partner() {
    return(
        <>
            <section className={'bg-light'}>
                <h1 className={'text-center p-4 display-3'}><strong>Partner with us</strong></h1>
            </section>
            <Container className={'p-4'}>
                <Row>
                    <Col className={'lg-4 md-12 sm-12'}><Image className={'img-fluid rounded'} src={'https://i.ibb.co/xYCyf6S/Adobe-Stock-220711353.jpg'} alt={'Serving Donations'}/></Col>
                    <Col className={'lg-4 md-12 sm-12'}><Image className={'img-fluid rounded'} src={'https://i.ibb.co/CQYcDsh/Adobe-Stock-434293293.jpg'} alt={'Volunteers'}/></Col>
                    <Col className={'lg-4 md-12 sm-12'}><Image className={'img-fluid rounded'} src={'https://i.ibb.co/bXsB6BJ/Adobe-Stock-176970757.jpg'} alt={'Serving meals'}/></Col>
                </Row>
                <Container className={'gx-md-1 gy-5 p-4 mt-4 text-center justify-content-center'}>
                    <h3 className={'display-6'}><strong>Why you should partner with us</strong></h3>
                    <p>Bacon ipsum dolor amet frankfurter andouille ground round t-bone cupim pork chop. Tail pork cupim porchetta drumstick shoulder chuck salami burgdoggen beef ribs pork belly beef. Flank andouille pork chop, bresaola fatback prosciutto shankle ball tip.</p>

                </Container>
                {/* NEEDS ALL (EXCEPT PADDING AND MB) TO BE CENTERED */}
                <Container className={'row justify-content-md-center'}>
                    <SignUpModal />
                </Container>
            </Container>
        </>
    )
}