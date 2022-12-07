import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export function AboutUs() {
    return (
        <>
            <section className={'py-5'}>
                <Container>
                    <Row className={'gx-md-5 gy-5 align-items-center'}>
                        <Col md={6} className={'text-center'}>
                            <Image className={'img-fluid rounded'} src={'https://i.ibb.co/LJznsLh/Adobe-Stock-230174667.jpg'} alt={'serving'}/>
                        </Col>
                        <Col md={6} className={'fs-5'}>
                            <h3 className={'display-6 strong'}><strong>What We Do</strong></h3>
                            <p>Plate it Forward is Albuquerque’s newest fighter against hunger. Created in 2022 in response to rising grocery prices and noticeable restaurant food waste, we wanted to give New Mexicans safe and reliable access to quality meals without the limitations of city programs or soup kitchens.</p>
                            <p>Embracing the Duke City’s sense of community, we partner with local restaurants and community centers around town to provide free meals to those in need. Our program is for anyone experiencing hunger regardless of their situation – no explanation, identification, or proof of income required. Life is difficult enough, and finding and enjoying a meal shouldn’t be.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}