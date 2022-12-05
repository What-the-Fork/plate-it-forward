import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export const RestaurantInfo = (props) => {

    const {restaurant} = props

    const {restaurantName, restaurantAddress, restaurantContactName, restaurantContactPhone, restaurantContactEmail} = restaurant

    return (
        <>
            <section className={'p-5'}>
                <Container className={''}>
                    <Row className={'justify-content-center'}>
                        <Col md={2} className={'order-lg-2'}>
                            <Image fluid={true} className={'rounded-circle'} src={'http://placekitten.com/250/250'} alt={'Nick Cage doing Nick Cage things'}/>
                        </Col>
                        <Col md={6} className={'order-lg-1'}>
                            <h3>{restaurantName}</h3>
                            <p>{restaurantContactName}</p>
                            <p>{restaurantContactEmail}</p>
                            <p>{restaurantContactPhone}</p>
                            <p>{restaurantAddress}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}