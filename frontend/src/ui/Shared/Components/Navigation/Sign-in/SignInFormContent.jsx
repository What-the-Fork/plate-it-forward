import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import React from "react";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import {DisplayStatus} from "../../display-status/DisplayStatus.jsx";
import {DisplayError} from "../../display-error/DisplayError.jsx";


export const SignInFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        // dirty,
        // isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
        // handleReset
    } = props;

    return (
        <>
            <Form onSubmit={handleSubmit}>
            <Row>
                {/* EMAIL */}
                <Form.Group as={Col} xs={12} md={6} controlId="contactEmail" className={'mb-3'}>
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <Form.Control
                            className="form-control"
                            name='contactEmail'
                            type="text"
                            // CAUSING BUG - NOT ABLE TO TYPE IN INPUT FIELD
                            value={values.centerContactEmail || values.restaurantContactEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'contactEmail'} />
                </Form.Group>

                {/* PASSWORD */}
                <Form.Group as={Col} xs={12} md={6} controlId="contactPassword" className={'mb-3'}>
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                            className="form-control"
                            name='contactPassword'
                            type="text"
                            value={values.centerContactEmail || values.restaurantContactEmail}
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={'contactEmail'} />
                </Form.Group>
            </Row>

            {/* SUBMIT BUTTON */}
            <Form.Group>
                <Button variant="primary" type="submit" className={'ms-auto d-flex justify-content-end'}>
                Submit
                </Button>
            </Form.Group>
            </Form>
        <div>
            <DisplayStatus status={status} />
        </div>
        </>
    )
};