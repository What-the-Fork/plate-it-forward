import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export function StaticCenterDonationForm() {
    return (
        <>
            <Container>
                <h3 className={'pb-2'}>Donations</h3>
                <p className={'fst-italic'}>Confirm the numbers of meals you served from your restaurant partners</p>
                <Form className={'mb-5'}>
                    <Row className="mb-3">
                        <h5>Marty's Back Alley Meats</h5>
                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServe" xs={12} md={6}>
                            <Form.Label>Served</Form.Label>
                            <Form.Control type="input" placeholder="Meals served"/>
                        </Form.Group>

                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServeDate" xs={12} md={6}>
                            <Form.Label>Date Served</Form.Label>
                            <Form.Control type="input" placeholder="Serve date"/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <h5>Marty's Back Alley Meats</h5>
                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServe" xs={12} md={6}>
                            <Form.Label>Served</Form.Label>
                            <Form.Control type="input" placeholder="Meals served"/>
                        </Form.Group>

                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServeDate" xs={12} md={6}>
                            <Form.Label>Date Served</Form.Label>
                            <Form.Control type="input" placeholder="Serve date"/>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <h5>Marty's Back Alley Meats</h5>
                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServe" xs={12} md={6}>
                            <Form.Label>Served</Form.Label>
                            <Form.Control type="input" placeholder="Meals served"/>
                        </Form.Group>

                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServeDate" xs={12} md={6}>
                            <Form.Label>Date Served</Form.Label>
                            <Form.Control type="input" placeholder="Serve date"/>
                        </Form.Group>
                    </Row>


                    <Button type="submit" className={'ms-auto d-flex justify-content-end btn btn-dark'}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}