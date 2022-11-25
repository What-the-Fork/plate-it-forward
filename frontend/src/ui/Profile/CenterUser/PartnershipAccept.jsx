import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";

export function PartnershipAccept() {
    return (
        <>
            <Container fluid={true} className={'bg-secondary py-5'}>
                <h4>A new restaurant wants to partner with you!</h4>
                <Row className={'gx-md-5 gy-5'}>
                    <Col>
                        <h5>Marty's Back Alley Meats</h5>
                    </Col>
                    <Col className={'d-flex justify-content-evenly'}>
                        <Button variant={'info'}>
                            Accept
                        </Button>
                        <Button variant={'info'}>
                            Deny
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}