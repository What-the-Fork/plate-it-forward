import React from "react";
import {Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function Donations() {
    return (
        <>
            <Container className={'bg-light rounded p-3 mt-4 mb-5 border border-secondary'}>
            <Form className="form-inline mt-3">
                <h5 className={'text-center'}>Donation Form</h5>
                <Container className={''}>
                <Row className="form-row justify-content-center mt-3">
                    <div className="col-auto">
                <Form.Label className="sr-only" htmlFor="inlineFormInputName2">Restaurant Name</Form.Label>
                <input type="text" className="form-control mb-2 mr-sm-2"
                       placeholder="Restaurant A"></input></div>
                    <div className="col-auto">
                <Form.Label className="sr-only" htmlFor="inlineFormInputName2">Number of Meals Donated</Form.Label>
                <input type="text" className="form-control mb-2 mr-sm-2"
                       placeholder="45"></input></div>
                    <div className="col-auto">
                <Form.Label className="sr-only" htmlFor="inlineFormInputName2">Donation Date</Form.Label>
                <input type="text" className="form-control mb-2 mr-sm-2"
                       placeholder="MM/DD/YYYY"></input></div>
                    <div className="col-auto">
                        <Button type="submit" className="btn btn-primary align-middle">Submit</Button></div>
                </Row>
                </Container>
            </Form>
            </Container>
        </>
    )
}