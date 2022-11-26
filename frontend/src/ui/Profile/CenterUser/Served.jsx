import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Form} from "formik";

export function Served() {
    return (
        <>
            <Container fluid={true} className={'bg-light py-5'}>
                <Row className={'gx-sm-5 gy-5'}>
                    <Col className={'px-md-5'}>
                        <h4>Donations</h4>
                    </Col>
                    <Col className={'px-md-5'}>
                        <Form>
                            <Form.Group className={'mb-3'} controlId="formServed">
                                <Form.Label>Served</Form.Label>
                                <Form.Control type={'integer'} placeholder={'Enter served'}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}