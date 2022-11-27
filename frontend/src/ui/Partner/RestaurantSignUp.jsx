import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
import React from "react";
import styles from "./partner.module.css";

export function RestaurantSignUp() {
    return (
        <>
            <Container>
                <h1 className={'display-3 text-center mb-5'}>Become a Partner Today</h1>
            </Container>
            <Container className={styles.formContainer}>
                <Form className={'border border-dark bg-light my-5 p-5'}>

                    <h4>Your Information</h4>

                    <Row className="mb-3">
                        {/* EMAIL */}
                        <Form.Group as={Col} controlId="formRestaurantContactEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        {/* PASSWORD */}
                        <Form.Group as={Col} controlId="formRestaurantContactPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Row className={'mb-3'}>
                        {/* CONTACT NAME */}
                        <Form.Group as={Col} controlId="formRestaurantContactName">
                            <Form.Label>Contact Name</Form.Label>
                            <Form.Control placeholder="Jane Doe" />
                        </Form.Group>

                        {/* CONTACT PHONE */}
                        <Form.Group as={Col} controlId="formRestaurantContactPhone">
                            <Form.Label>Contact Phone</Form.Label>
                            <Form.Control type="phone" placeholder="505-555-5555" />
                        </Form.Group>
                    </Row>

                    <h4 className={'mt-5'}>Restaurant Information</h4>

                    <Row className="mb-3">
                        {/* RESTAURANT NAME */}
                        <Form.Group as={Col} controlId="formRestaurantName">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control placeholder="Restaurant A" />
                        </Form.Group>

                        {/* STREET */}
                        <Form.Group as={Col} controlId="formRestaurantAddress">
                            <Form.Label>Restaurant Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                    </Row>

                    {/*<Form.Group className="mb-3" controlId="formRestaurantAddress2">*/}
                    {/*    <Form.Label>Address 2</Form.Label>*/}
                    {/*    <Form.Control placeholder="Apartment, studio, or floor" />*/}
                    {/*</Form.Group>*/}

                    {/* CITY */}
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formRestaurantCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        {/* STATE */}
                        <Form.Group as={Col} controlId="formRestaurantState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue='NM'>
                                {/*<option>Choose...</option>*/}
                                <option>NM</option>
                            </Form.Select>
                        </Form.Group>

                        {/* ZIP */}
                        <Form.Group as={Col} controlId="formRestaurantZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    {/* CHECKBOX ... DO WE WANT?? */}
                    <Form.Group className={'mt-5 mb-3'} id="formRestaurantCheckbox">
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