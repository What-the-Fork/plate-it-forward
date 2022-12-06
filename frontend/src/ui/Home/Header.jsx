import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap"
import styles from './home.module.css'

export function Header() {
    return (
        <>
                <Container fluid={true} className={styles.header}>
                    {/* row and column classNames keep title and tag line centered -- no css needed */}
                    <Row className={'h-100 align-items-center'}>
                        <Col className={'col-12 text-center '}>
                            <Image width={'350'} className={'mb-3'} src={'https://i.ibb.co/7SKwHPn/whiteplate-logo.png'} alt={'plateIt'}></Image>
                            {/*<h1 className={'display-1'}>Plate it Forward</h1>*/}
                            <p className={'lead text-light mt-1'}>Chislic venison cupim, drumstick alcatra hamburger spare ribs pancetta ham.</p>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}

