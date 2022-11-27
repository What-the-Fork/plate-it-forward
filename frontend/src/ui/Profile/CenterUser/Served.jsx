import React from 'react'
import {Col, Container, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export function Served() {
    return (
        <>
    <Container>
        <h3 className={'pb-2'}>Donations</h3>
        <p className={'fst-italic'}>Confirm donations received</p>
            <Form className={'mb-5'}>
                <Row className="mb-3">
                    <h5>Marty's Back Alley Meats</h5>
                    <Form.Group as={Col} controlId="formGridServe">
                        <Form.Label>Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter meals served..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridServeDate">
                        <Form.Label>Date Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter serve date..." />
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                    <Form.Group className="mb-1" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Did not receive donation" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <h5>Marty's Back Alley Meats</h5>
                    <Form.Group as={Col} controlId="formGridServe">
                        <Form.Label>Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter meals served..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridServeDate">
                        <Form.Label>Date Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter serve date..." />
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                    <Form.Group className="mb-1" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Did not receive donation" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <h5>Marty's Back Alley Meats</h5>
                    <Form.Group as={Col} controlId="formGridServe">
                        <Form.Label>Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter meals served..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridServeDate">
                        <Form.Label>Date Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter serve date..." />
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                    <Form.Group className="mb-1" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Did not receive donation" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <h5>Marty's Back Alley Meats</h5>
                    <Form.Group as={Col} controlId="formGridServe">
                        <Form.Label>Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter meals served..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridServeDate">
                        <Form.Label>Date Served</Form.Label>
                        <Form.Control type="input" placeholder="Enter serve date..." />
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                    <Form.Group className="mb-1" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Did not receive donation" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className={'ms-auto d-flex justify-content-end'}>
                    Submit
                </Button>
            </Form>
    </Container>

            {/*    <Container>*/}
            {/*    <h4>Donations</h4>*/}
            {/*    <Stack direction="horizontal" gap={3}>*/}
            {/*        <Form.Control className="me-auto" placeholder="Served" />*/}
            {/*        <Form.Control className="me-auto" placeholder="Date" />*/}
            {/*        <Button variant="secondary">Submit</Button>*/}
            {/*        <div className="vr" />*/}
            {/*        <Button variant="outline-danger">Reset</Button>*/}
            {/*    </Stack>*/}
            {/*</Container>*/}

            {/*<Container fluid={true} className={'bg-light py-5'}>*/}
            {/*    <h2>Donations</h2>*/}
            {/*            <Form>*/}
            {/*                <Form.Group className={'mb-3'} controlId="formServed">*/}
            {/*                    <Form.Label>Served</Form.Label>*/}
            {/*                    <Form.Control type={'input'} placeholder={'Enter served'}/>*/}
            {/*                </Form.Group>*/}
            {/*            </Form>*/}
            {/*</Container>*/}
        </>
)
}
