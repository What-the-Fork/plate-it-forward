import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "../../../../../utils/http-config.js";
import jwtDecode from "jwt-decode";
import {getAuth} from "../../../../../store/auth.js";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {InputGroup} from "react-bootstrap";
import {DisplayError} from "../../display-error/DisplayError.jsx";
import Button from "react-bootstrap/Button";
import {DisplayStatus} from "../../display-status/DisplayStatus.jsx";
import React from "react";
import {FormDebugger} from "../../FormDebugger";

export const RestaurantSignInForm = () => {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        restaurantContactEmail: Yup.string()
            .email('Email must be a vaild email')
            .required('Email is required'),
        restaurantPassword: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least eight characters')
    });

    const restaurantSignIn = {
        restaurantContactEmail: '',
        restaurantPassword: '',
    };

    const restaurantSubmitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/restaurant-sign-in/', values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers['authorization']) {
                    window.localStorage.removeItem('authorization');
                    window.localStorage.setItem('authorization', reply.headers['authorization']);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers['authorization'])
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={restaurantSignIn}
                onSubmit={restaurantSubmitSignIn}
                validationSchema={validator}
            >
                {RestaurantSignInFormContent}
            </Formik>
        </>
    )
}

function RestaurantSignInFormContent(props) {

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
    } = props

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
                    {/* EMAIL */}
                    <Form.Group as={Col} xs={12} md={6} controlId="restaurantContactEmail" className={'mb-3'}>
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <Form.Control
                                className="form-control"
                                name='restaurantContactEmail'
                                type="text"
                                // CAUSING BUG - NOT ABLE TO TYPE IN INPUT FIELD
                                value={values.restaurantContactEmail}
                                placeholder="Enter email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </InputGroup>
                        <DisplayError errors={errors} touched={touched} field={'restaurantContactEmail'} />
                    </Form.Group>

                    {/* PASSWORD */}
                    <Form.Group as={Col} xs={12} md={6} controlId="restaurantPassword" className={'mb-3'}>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                className="form-control"
                                name='restaurantPassword'
                                type="text"
                                value={values.restaurantPassword}
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </InputGroup>
                        <DisplayError errors={errors} touched={touched} field={'restaurantPassword'} />
                    </Form.Group>
                </Row>

                {/* SUBMIT BUTTON */}
                <Form.Group>
                    <Button variant="primary" type="submit" className={'ms-auto d-flex justify-content-end'}>
                        Submit
                    </Button>
                </Form.Group>
                <FormDebugger/>
            </Form>
            <div>
                <DisplayStatus status={status} />
            </div>
        </>
    )
}