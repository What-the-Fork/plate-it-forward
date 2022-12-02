import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import React from "react";


export const SignInFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <>
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
            </Row>

        </>
    )
};