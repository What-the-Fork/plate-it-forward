import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
// import {restaurantSignUpFormContent} from "./restaurantSignUpFormContent.jsx";
import {httpConfig} from "../../../../../utils/http-config.js";
import {Container, InputGroup} from "react-bootstrap";
import styles from "../../../../Partner/partner.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {DisplayError} from "../../display-error/DisplayError.jsx";
import Button from "react-bootstrap/Button";
import {DisplayStatus} from "../../display-status/DisplayStatus.jsx";
import {FormDebugger} from "../../FormDebugger";

export const RestaurantSignUpForm = () => {
    const restaurantSignUp = {
        restaurantStreet: '',
        restaurantCity: '',
        restaurantState: '',
        restaurantZip: '',
        restaurantAddress: '',
        restaurantContactEmail: '',
        restaurantContactName: '',
        restaurantContactPhone: '',
        restaurantName: '',
        restaurantPassword: '',
        restaurantPasswordConfirm: '',
        // restaurantProfileImgUrl: '',
    };

    const restaurantValidator = Yup.object().shape({
        restaurantStreet: Yup.string()
            .required('A valid street address is required')
            .min(5, 'Please provide a valid street address')
            .max(64, 'This street address exceeds the allotted characters'),
        restaurantCity: Yup.string()
            .required('A valid city is required')
            .min(1, 'Please provide a valid city')
            .max(32, 'This city exceeds the allotted characters'),
        restaurantState: Yup.string()
            .required('A valid state is required')
            .min(2, 'Please provide a valid state')
            .max(16, 'This state exceeds the allotted characters'),
        restaurantZip: Yup.string()
            .required('A valid zip code is required')
            .min(5, 'Please provide a valid zip code')
            .max(10, 'This zip code exceeds the allotted characters'),
        restaurantContactEmail: Yup.string()
            .email('Please provide a valid email')
            .required('email is required'),
        restaurantContactName: Yup.string()
            .required('A contact name is required')
            .min(1, 'Please provide your name')
            .max(64, 'This name exceeds the allotted characters'),
        restaurantContactPhone: Yup.string()
            .required('A valid phone number is required')
            .min(10, 'Please provide a valid phone number')
            .max(64, 'This number exceeds the allotted characters'),
        restaurantName: Yup.string()
            .required('A community restaurant name is required')
            .min(5, 'Please provide a restaurant name')
            .max(64, 'This name exceeds the allotted characters'),
        restaurantPassword: Yup.string()
            .required('A password is required')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
        restaurantPasswordConfirm: Yup.string()
            .required('Passwords must match')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
    });

    const submitRestaurantSignUp = (values, {resetForm, setStatus}) => {
        // CONCATENATING STREET, CITY, STATE, AND ZIP INTO ADDRESS TO REFLECT WHAT'S IN SQL TABLE
        values.restaurantAddress = `${values.restaurantStreet} ${values.restaurantCity}, ${values.restaurantState}, ${values.restaurantZip}`
        httpConfig.post('/apis/restaurant-sign-up/', values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            });
    };

    return (

        <Formik
            initialValues={restaurantSignUp}
            onSubmit={submitRestaurantSignUp}
            validationSchema={restaurantValidator}
        >
            {RestaurantSignUpFormContent}
        </Formik>
    )
}

function RestaurantSignUpFormContent(props) {

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
            <Container>
                <h1 className={'display-3 text-center mb-5'}>Become a Partner Today</h1>
            </Container>
            <Container className={styles.formContainer}>
                <Form onSubmit={handleSubmit} className={'border border-dark bg-light my-5 p-5 '}>
                    <h4 className={'mb-3'}>Your Information</h4>
                    <Row>
                        {/* EMAIL */}
                        <Form.Group as={Col} xs={12} controlId="formRestaurantContactEmail" className={'mb-3'}>
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantContactEmail'}
                                    type="text"
                                    value={values.restaurantContactEmail}
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantContactEmail'} />
                        </Form.Group>

                        {/* PASSWORD */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantPassword" className={'mb-3'}>
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantPassword'}
                                    type="password"
                                    value={values.restaurantPassword}
                                    placeholder="Enter Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantPassword'} />
                        </Form.Group>

                        {/* PASSWORD CONFIRM*/}
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantPasswordConfirm" className={'mb-3'}>
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantPasswordConfirm'}
                                    type="password"
                                    value={values.restaurantPasswordConfirm}
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantPasswordConfirm'} />
                        </Form.Group>
                    </Row>

                    <Row>
                        {/* CONTACT NAME */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantContactName" className={'mb-3'}>
                            <Form.Label>Contact Name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantContactName'}
                                    type="text"
                                    value={values.restaurantContactName}
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantContactName'} />
                        </Form.Group>

                        {/* CONTACT PHONE */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantContactPhone" className={'mb-3'}>
                            <Form.Label>Contact Phone</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantContactPhone'}
                                    type="phone"
                                    value={values.restaurantContactPhone}
                                    placeholder="5055555555"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantContactPhone'} />
                        </Form.Group>
                    </Row>

                    <h4 className={'mt-4 mb-3'}>Restaurant Information</h4>

                    <Row>
                        {/* restaurant NAME */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantName" className={'mb-3'}>
                            <Form.Label>Name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantName'}
                                    type="text"
                                    value={values.restaurantName}
                                    placeholder="Restaurant Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantName'} />
                        </Form.Group>

                        {/* STREET */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantStreet" className={'mb-3'}>
                            <Form.Label>Address</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantStreet'}
                                    type="text"
                                    value={values.restaurantStreet}
                                    placeholder="1234 Main St"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantStreet'} />
                        </Form.Group>
                    </Row>

                    {/*<Form.Group className="mb-3" controlId="formRestaurantAddress2">*/}
                    {/*    <Form.Label>Address 2</Form.Label>*/}
                    {/*    <Form.Control placeholder="Apartment, studio, or floor" />*/}
                    {/*</Form.Group>*/}

                    {/* CITY */}
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} controlId="formRestaurantCity" className={'mb-3'}>
                            <Form.Label>City</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantCity'}
                                    type="text"
                                    value={values.restaurantCity}
                                    placeholder="City"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantCity'} />
                        </Form.Group>

                        {/* STATE */}
                        <Form.Group as={Col} controlId="formRestaurantState" className={'mb-3'}>
                            <Form.Label>State</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantState'}
                                    type="select"
                                    value={values.restaurantState}
                                    placeholder="State"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantState'} />
                        </Form.Group>

                        {/* ZIP */}
                        <Form.Group as={Col} controlId="formRestaurantZip" className={'mb-3'}>
                            <Form.Label>Zip</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'restaurantZip'}
                                    type="text"
                                    value={values.restaurantZip}
                                    placeholder="12345"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formRestaurantZip'} />
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className={'ms-auto d-flex justify-content-end btn btn-dark'}>
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form>
                <DisplayStatus status={status} />
            </Container>
        </>
    );
}