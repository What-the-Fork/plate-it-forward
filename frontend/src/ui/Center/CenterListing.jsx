import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

// serge test

export const CenterListing = (props) => {
    const {center} = props
console.log(center)
    const {centerName, centerAddress, centerPhone, centerWebsiteUrl} = center
    return (
        <>
                <Container>
                    <Row className={'gx-md-5 gy-5'}>
                        <Col md={5} className={'text-center'}>
                            <Image className={'img-fluid'} src={'http://placekitten.com/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={7} className={'fs-5'}>
                            <h3>{centerName}</h3>
                            <p>{centerAddress}</p>
                            <p>{centerPhone}</p>
                            <p>{centerWebsiteUrl}</p>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-evenly fs-5'}>
                            <p className={' p-2 bg-light text white'}>Nadja's</p>
                            <p className={' p-2 bg-light text white'}>Nandor's</p>
                            <p className={' p-2 bg-light text white'}>Guillermo's</p>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}