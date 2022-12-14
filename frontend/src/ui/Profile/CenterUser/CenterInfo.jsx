import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export const CenterInfo = (props) => {

    const {center} = props

    const {centerName, centerContactName, centerAddress, centerContactPhone, centerContactEmail} = center

    console.log(center)

    return (
        <>
            <section className={'py-5'}>
                <Container>
                    <Row className={'justify-content-center'}>
                        <Col md={6} className={'text-center order-lg-2'}>
                            <Image fluid={true} className={'rounded rounded-circle'} src={'https://i.ibb.co/jWjShTx/empty-Center-Profile-Image.png'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={6} className={'fs-5 order-lg-1'}>
                            <h3>{centerName}</h3>
                            <p>{centerContactName}</p>
                            <p>{centerContactEmail}</p>
                            <p>{centerContactPhone}</p>
                            <p>{centerAddress}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}