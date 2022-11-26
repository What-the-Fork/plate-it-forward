import React from "react";
import {Container, Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function Donations() {
    return (
        <>
            <Container>
                <h5>Donation Form</h5>
            <Form.Group className="inline-form" controlId="formBasicEmail">
                <Form.Label>Meals Donated</Form.Label>
                <Form.Control type="email" placeholder="Enter Number of Meals Donated" />
            </Form.Group>
            </Container>
        </>
    )
}