import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export function AboutUs() {
    return (
        <>
            <section className={'py-5'}>
                <Container>
                    <Row className={'gx-md-5 gy-5'}>
                        <Col md={6} className={'text-center'}>
                            <Image className={'img-fluid'} src={'https://ucarecdn.com/fb898616-d15b-4ac0-90b0-ad5570352fd5/-/crop/466x467/0,20/-/preview/-/progressive/yes/-/format/auto/'} alt={'headshot of GOB Bluth wearing magenta velvet suit'}/>
                        </Col>
                        <Col md={6} className={'fs-5'}>
                            <h3>What We Do</h3>
                            <p>Bacon ipsum dolor amet frankfurter andouille ground round t-bone cupim pork chop. Tail pork cupim porchetta drumstick shoulder chuck salami burgdoggen beef ribs pork belly beef. Flank andouille pork chop, bresaola fatback prosciutto shankle ball tip. Pig frankfurter tongue, spare ribs jerky corned beef short loin ham chicken boudin. Bacon brisket sirloin, tongue pig shoulder filet mignon.</p>
                            <p>Ribeye jowl rump, swine shoulder ball tip picanha fatback chuck filet mignon sirloin kevin porchetta. Capicola short ribs sirloin, filet mignon corned beef ham rump hamburger. Tail t-bone leberkas shankle buffalo swine ball tip bresaola drumstick sirloin pastrami porchetta. Jowl spare ribs boudin flank burgdoggen buffalo, shoulder meatball. Buffalo frankfurter jerky, short loin pig cupim cow burgdoggen meatloaf strip steak.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}