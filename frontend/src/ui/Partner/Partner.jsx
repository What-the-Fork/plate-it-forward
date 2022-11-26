import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";

export function Partner() {
    return(
        <>
            <Container>
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
                    <Row className={'gx-md-1 gy-5 mt-4 mb-4'}>
                        <Col md={5} className={'text-center order-md-last order-lg-last'}>
                            <Image fluid={true} src={'https://www.placecage.com/c/325/325'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={7} className={'fs-5 order-md-first order-lg-first'}>
                            <h3>What We Do</h3>
                            <p>Ribeye jowl rump, swine shoulder ball tip picanha fatback chuck filet mignon sirloin kevin porchetta. Capicola short ribs sirloin, filet mignon corned beef ham rump hamburger. Tail t-bone leberkas shankle buffalo swine ball tip bresaola drumstick sirloin pastrami porchetta.</p>
                        </Col>
                    </Row>
                    {/* NEEDS ALL (EXCEPT PADDING AND MB) TO BE CENTERED */}
                    <Button className={'p-4 mx-auto d-flex justify-content-center my-5'}>Become a partner today!</Button>
            </Container>
        </>
    )
}