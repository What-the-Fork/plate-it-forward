import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export function Stats() {
    return (
        <>
            <Container className={'my-5 text-center'}>
                <h3>How We Do It</h3>
                <p>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                <Row className={'gx-lg-5 gy-5 mt-1'}>
                    <Col md={6} lg={3}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/9br9DkY/1.png'}
                               alt={'Nick Cage doing Nick Cage things'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/TB4vb6L/3.png'} alt={'Nick Cage doing Nick Cage things'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} width={'200'} fluid={true} src={'https://i.ibb.co/3SLGwYS/2.png'}
                               alt={'Nick Cage doing Nick Cage things'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} fluid={true} src={'https://www.placecage.com/c/200/200'}
                               alt={'Nick Cage doing Nick Cage things'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
