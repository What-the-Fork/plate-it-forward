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
                            <p>Bacon ipsum dolor amet frankfurter andouille ground round t-bone cupim pork chop. Tail pork cupim porchetta drumstick shoulder chuck salami burgdoggen beef ribs pork belly beef. Flank andouille pork chop, bresaola fatback prosciutto shankle ball tip. Pig frankfurter tongue, spare ribs jerky corned beef short loin ham chicken boudin. Bacon brisket sirloin, tongue pig shoulder filet mignon.</p>
                            <p>Ribeye jowl rump, swine shoulder ball tip picanha fatback chuck filet mignon sirloin kevin porchetta. Capicola short ribs sirloin, filet mignon corned beef ham rump hamburger. Tail t-bone leberkas shankle buffalo swine ball tip bresaola drumstick sirloin pastrami porchetta.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}