import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export function CenterInfo({ce}) {
    return (
        <>
            <section className={'py-5'}>
                <Container>
                    <Row className={'gx-md-5 gy-5'}>
                        <Col md={6} className={'text-center order-lg-2'}>
                            <Image fluid={true} className={'rounded rounded-circle'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={6} className={'fs-5 order-lg-1'}>
                            <h3>{centerName}</h3>
                            <p>{centerContactName}</p>
                            <p>{centerContactEmail}</p>
                            <p>(717) 309-3793</p>
                            <p>137 New Holland Ave, Lancaster, PA 17602</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}