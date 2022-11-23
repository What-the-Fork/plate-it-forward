import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";

export function Stats() {
    return (
        <>
            <Container className={'my-5 text-center'}>
                <h3>How We Do It</h3>
                <p>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                <Row className={'gx-lg-5 gy-5 mt-3'}>
                    <Col md={6} lg={3}>
                        <Image className={'rounded-circle'} fluid={true} src={'https://resizing.flixster.com/Zmoio32APnIa0ws4UFroCr3YMkA=/300x300/v2/https://flxt.tmsimg.com/assets/p2873540_e_h9_ab.jpg'}
                               alt={'awkward close up of Michael Bluth'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} fluid={true} src={'https://resizing.flixster.com/Zmoio32APnIa0ws4UFroCr3YMkA=/300x300/v2/https://flxt.tmsimg.com/assets/p2873540_e_h9_ab.jpg'}
                               alt={'awkward close up of Michael Bluth'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} fluid={true} src={'https://resizing.flixster.com/Zmoio32APnIa0ws4UFroCr3YMkA=/300x300/v2/https://flxt.tmsimg.com/assets/p2873540_e_h9_ab.jpg'}
                               alt={'awkward close up of Michael Bluth'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                    <Col md={6} lg={3} className={'text-center'}>
                        <Image className={'rounded-circle'} fluid={true} src={'https://resizing.flixster.com/Zmoio32APnIa0ws4UFroCr3YMkA=/300x300/v2/https://flxt.tmsimg.com/assets/p2873540_e_h9_ab.jpg'}
                               alt={'awkward close up of Michael Bluth'}/>
                        <p className={'mt-4 p-3 rounded bg-light'}>Shoulder fatback meatloaf, porchetta drumstick pastrami pork. Pig tenderloin jerky frankfurter, beef burgdoggen meatball cow.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}