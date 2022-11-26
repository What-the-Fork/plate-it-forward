import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export function RestaurantInfo() {
    return (
        <>
            <section className={'p-5'}>
                <Container className={''}>
                    <Row className={'justify-content-center'}>
                        <Col md={2} className={'order-lg-2'}>
                            <Image fluid={true} className={'rounded-circle'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={6} className={'order-lg-1'}>
                            <h3>Restaurant A</h3>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Address</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}