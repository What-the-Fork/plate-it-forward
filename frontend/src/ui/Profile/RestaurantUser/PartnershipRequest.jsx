import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function PartnershipRequest() {
    return (
        <>
            <Container fluid={true} className={'bg-light p-5'}>
                <h3 className={'text-center'}>Partner with a Community Center</h3>
                <div className={'p-4 justify-content-center '}>
                    <Container>
                        <Row className={'align-middle justify-content-center'}>
                            <Col className={'text-center'}>
                                <Image className={'img-fluid rounded'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                            </Col>
                            <Col className={'fs-5'}>
                                <h5>Comm Center A</h5>
                                <p>Center Address</p>
                                <p>Center Phone</p>
                                <p>URL</p>
                                <Button type="submit" className="btn btn-primary text-center align-self-center">Request Partnership</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={'p-4 justify-content-center'}>
                    <Container>
                        <Row className={'align-middle justify-content-center'}>
                            <Col className={'text-center'}>
                                <Image className={'img-fluid rounded'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                            </Col>
                            <Col className={'fs-5'}>
                                <h5>Comm Center B</h5>
                                <p>Center Address</p>
                                <p>Center Phone</p>
                                <p>URL</p>
                                <Button type="submit" className="btn btn-primary text-center align-self-center">Request Partnership</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={'p-4 justify-content-center'}>
                    <Container>
                        <Row className={'align-middle justify-content-center'}>
                            <Col className={'text-center'}>
                                <Image className={'img-fluid rounded'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                            </Col>
                            <Col className={'fs-5'}>
                                <h5>Comm Center C</h5>
                                <p>Center Address</p>
                                <p>Center Phone</p>
                                <p>URL</p>
                                <Button type="submit" className="btn btn-primary text-center align-self-center">Request Partnership</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={'p-4 justify-content-center'}>
                    <Container>
                        <Row className={'align-middle justify-content-center'}>
                            <Col className={'text-center'}>
                                <Image className={'img-fluid rounded'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                            </Col>
                            <Col className={'fs-5'}>
                                <h5>Comm Center D</h5>
                                <p>Center Address</p>
                                <p>Center Phone</p>
                                <p>URL</p>
                                <Button type="submit" className="btn btn-primary text-center align-self-center">Request Partnership</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={'p-4 justify-content-center'}>
                    <Container>
                        <Row className={'align-middle justify-content-center'}>
                            <Col className={'text-center'}>
                                <Image className={'img-fluid rounded'} src={'https://www.placecage.com/c/200/200'} alt={'Nick Cage doing Nick Cage things'}/>
                            </Col>
                            <Col className={'fs-5'}>
                                <h5>Comm Center E</h5>
                                <p>Center Address</p>
                                <p>Center Phone</p>
                                <p>URL</p>
                                <Button type="submit" className="btn btn-primary text-center align-self-center">Request Partnership</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}