import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";


export function Stats() {
    return (
        <>
            <Container className={'my-5 text-center'}>
                <h3 className={'display-6'}><strong>How We Do It</strong></h3>
                <p>Plate it Forward relies on the kindness of our partners to help spread our mission and feed those in need. We currently work with 15 local restaurants and 5 community centers across Albuquerque, hoping to remove location and scarcity barriers for anyone needing a meal.</p>
                <Row className={'gx-lg-5 gy-5 mt-1'}>
                    <Col md={6} lg={3}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/rmFbh6W/stats-6.png'}
                               alt={'stats'}/>
                        <p className={'mt-4 p-3 rounded bg-light border'}>Restaurants in the U.S. generate an estimated 30 billion pounds of food waste each year.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/VgfmxVg/2.png'} alt={'restaurants'}/>
                        <p className={'mt-4 p-3 rounded bg-light border'}>Restaurants package up their leftovers for the day and store them overnight. </p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/ZLpDB9n/stats-7.png'}
                               alt={'community centers'}/>
                        <p className={'mt-4 p-3 rounded bg-light border'}>Leftovers are brought to a community center partner the next day and served around lunch time.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/6B3mq4W/stats-8.png'}
                               alt={'food'}/>
                        <p className={'mt-4 p-3 rounded bg-light border'}>No more food waste or empty stomachs. Doing good has never tasted so good!</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
