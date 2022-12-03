import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
import React from "react";
import styles from "../../../../Partner/partner.module.css";

export function CenterSignUpFormContent() {
    return (
        <>
            <Container>
                <h1 className={'display-3 text-center mb-5'}>Become a Partner Today</h1>
            </Container>
            <Container className={styles.formContainer}>
                <Form className={'border border-dark bg-light my-5 p-5'}>

                    <h4 className={'mb-3'}>Your Information</h4>

                    <Row>
                        {/* EMAIL */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactEmail" className={'mb-3'}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        {/* PASSWORD */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactPassword" className={'mb-3'}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        {/* PASSWORD CONFIRM*/}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactPassword" className={'mb-3'}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                    </Row>

                    <Row>
                        {/* CONTACT NAME */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactName" className={'mb-3'}>
                            <Form.Label>Contact Name</Form.Label>
                            <Form.Control placeholder="Jane Doe" />
                        </Form.Group>

                        {/* CONTACT PHONE */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactPhone" className={'mb-3'}>
                            <Form.Label>Contact Phone</Form.Label>
                            <Form.Control type="phone" placeholder="505-555-5555" />
                        </Form.Group>
                    </Row>

                    <h4 className={'mt-4 mb-3'}>Community Center Information</h4>

                    <Row>
                        {/* RESTAURANT NAME */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterName" className={'mb-3'}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Community Center A" />
                        </Form.Group>

                        {/* STREET */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterAddress" className={'mb-3'}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                    </Row>

                    {/*<Form.Group className="mb-3" controlId="formRestaurantAddress2">*/}
                    {/*    <Form.Label>Address 2</Form.Label>*/}
                    {/*    <Form.Control placeholder="Apartment, studio, or floor" />*/}
                    {/*</Form.Group>*/}

                    {/* CITY */}
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterCity" className={'mb-3'}>
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        {/* STATE */}
                        <Form.Group as={Col} controlId="formCenterState" className={'mb-3'}>
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue='NM'>
                                {/*<option>Choose...</option>*/}
                                <option>NM</option>
                            </Form.Select>
                        </Form.Group>

                        {/* ZIP */}
                        <Form.Group as={Col} controlId="formCenterZip" className={'mb-3'}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    {/* CHECKBOX ... DO WE WANT?? */}
                    <Form.Group className={'mt-4 mb-4'} id="formCenterCheckbox">
                        <Form.Check type="checkbox" label="I confirm all information above is correct." />
                    </Form.Group>

                    {/* SUBMIT BUTTON */}
                    <Button variant="primary" type="submit" className={'ms-auto d-flex justify-content-end'}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}