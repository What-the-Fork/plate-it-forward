import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";

export function PartnershipAccept() {
    return (
        <>
            <Container fluid={true} className={'bg-secondary py-5'}>
                <h4>A new restaurant wants to partner with you!</h4>
                <Row className={'gx-md-5 gy-5'}>
                    <Col>
                        <p>Marty's Back Alley Meats</p>
                    </Col>
                    <Col>
                        <Button variant={'info'}>
                            Slime
                        </Button>
                        <Button variant={'info'}>
                            Slime
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}