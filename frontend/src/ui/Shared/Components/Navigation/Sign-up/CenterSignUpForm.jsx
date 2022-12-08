import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
// import {CenterSignUpFormContent} from "./CenterSignUpFormContent.jsx";
import {httpConfig} from "../../../../../utils/http-config.js";
import {Container, InputGroup} from "react-bootstrap";
import styles from "../../../../Partner/partner.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {DisplayError} from "../../display-error/DisplayError.jsx";
import Button from "react-bootstrap/Button";
import {DisplayStatus} from "../../display-status/DisplayStatus.jsx";
// import {FormDebugger} from "../../FormDebugger";

export const CenterSignUpForm = () => {
    const centerSignUp = {
        centerStreet: '',
        centerCity: '',
        centerState: '',
        centerZip: '',
        centerAddress: '',
        centerContactEmail: '',
        centerContactName: '',
        centerContactPhone: '',
        centerName: '',
        centerPassword: '',
        centerPasswordConfirm: '',
        // centerProfileImgUrl: '',
    };

    const centerValidator = Yup.object().shape({
        centerStreet: Yup.string()
            .required('A valid street address is required')
            .min(5, 'Please provide a valid street address')
            .max(64, 'This street address exceeds the allotted characters'),
        centerCity: Yup.string()
            .required('A valid city is required')
            .min(1, 'Please provide a valid city')
            .max(32, 'This city exceeds the allotted characters'),
        centerState: Yup.string()
            .required('A valid state is required')
            .min(2, 'Please provide a valid state')
            .max(16, 'This state exceeds the allotted characters'),
        centerZip: Yup.string()
            .required('A valid zip code is required')
            .min(5, 'Please provide a valid zip code')
            .max(10, 'This zip code exceeds the allotted characters'),
        centerContactEmail: Yup.string()
            .email('Please provide a valid email')
            .required('email is required'),
        centerContactName: Yup.string()
            .required('A contact name is required')
            .min(1, 'Please provide your name')
            .max(64, 'This name exceeds the allotted characters'),
        centerContactPhone: Yup.string()
            .required('A valid phone number is required')
            .min(10, 'Please provide a valid phone number')
            .max(64, 'This number exceeds the allotted characters'),
        centerName: Yup.string()
            .required('A community center name is required')
            .min(5, 'Please provide a community center name')
            .max(64, 'This name exceeds the allotted characters'),
        centerPassword: Yup.string()
            .required('A password is required')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
        centerPasswordConfirm: Yup.string()
            .required('Passwords must match')
            .min(8, 'Password must be at least eight characters')
            .max(200, 'Password must be fewer than 200 characters'),
    });

    const submitCenterSignUp = (values, {resetForm, setStatus}) => {
        // CONCATENATING STREET, CITY, STATE, AND ZIP INTO ADDRESS TO REFLECT WHAT'S IN SQL TABLE
        values.centerAddress = `${values.centerStreet} ${values.centerCity}, ${values.centerState}, ${values.centerZip}`
        httpConfig.post('/apis/center-sign-up/', values)
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
            initialValues={centerSignUp}
            onSubmit={submitCenterSignUp}
            validationSchema={centerValidator}
        >
            {CenterSignUpFormContent}
        </Formik>
    )
}

function CenterSignUpFormContent(props) {

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
                <h1 className={'display-3 text-center p-4'}>Become a Partner Today</h1>
            </Container>
            <Container className={styles.formContainer}>
                <Form onSubmit={handleSubmit} className={'border border-dark bg-light my-5 p-5'}>

                    <h4 className={'mb-3'}>Your Information</h4>
                    <Row>
                        {/* EMAIL */}
                        <Form.Group as={Col} xs={12} controlId="formCenterContactEmail" className={'mb-3'}>
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerContactEmail'}
                                    type="text"
                                    value={values.centerContactEmail}
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterContactEmail'} />
                        </Form.Group>

                        {/* PASSWORD */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterPassword" className={'mb-3'}>
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerPassword'}
                                    type="password"
                                    value={values.centerPassword}
                                    placeholder="Enter Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterPassword'} />
                        </Form.Group>

                        {/* PASSWORD CONFIRM*/}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterPasswordConfirm" className={'mb-3'}>
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerPasswordConfirm'}
                                    type="password"
                                    value={values.centerPasswordConfirm}
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterPasswordConfirm'} />
                        </Form.Group>
                    </Row>

                    <Row>
                        {/* CONTACT NAME */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactName" className={'mb-3'}>
                            <Form.Label>Contact Name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerContactName'}
                                    type="text"
                                    value={values.centerContactName}
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterContactName'} />
                        </Form.Group>

                        {/* CONTACT PHONE */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactPhone" className={'mb-3'}>
                            <Form.Label>Contact Phone</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerContactPhone'}
                                    type="phone"
                                    value={values.centerContactPhone}
                                    placeholder="5055555555"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterContactPhone'} />
                        </Form.Group>
                    </Row>

                    <h4 className={'mt-4 mb-3'}>Community Center Information</h4>

                    <Row>
                        {/* CENTER NAME */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterName" className={'mb-3'}>
                            <Form.Label>Name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerName'}
                                    type="text"
                                    value={values.centerName}
                                    placeholder="Community Center Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterName'} />
                        </Form.Group>

                        {/* STREET */}
                        <Form.Group as={Col} xs={12} md={6} controlId="formCenterStreet" className={'mb-3'}>
                            <Form.Label>Address</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerStreet'}
                                    type="text"
                                    value={values.centerStreet}
                                    placeholder="1234 Main St"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterStreet'} />
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
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerCity'}
                                    type="text"
                                    value={values.centerCity}
                                    placeholder="City"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterCity'} />
                        </Form.Group>

                        {/* STATE */}
                        <Form.Group as={Col} controlId="formCenterState" className={'mb-3'}>
                            <Form.Label>State</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerState'}
                                    type="select"
                                    value={values.centerState}
                                    placeholder="State"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterState'} />
                        </Form.Group>

                        {/* ZIP */}
                        <Form.Group as={Col} controlId="formCenterZip" className={'mb-3'}>
                            <Form.Label>Zip</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'centerZip'}
                                    type="text"
                                    value={values.centerZip}
                                    placeholder="12345"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formCenterZip'} />
                        </Form.Group>
                    </Row>

                    {/*/!* CHECKBOX ... DO WE WANT?? *!/*/}
                    {/*<Form.Group className={'mt-4 mb-4'} id="formCenterCheckbox">*/}
                    {/*    <Form.Check type="checkbox" label="I confirm all information above is correct." />*/}
                    {/*</Form.Group>*/}

                    {/* SUBMIT BUTTON */}
                    <Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className={'ms-auto d-flex justify-content-end btn btn-dark'}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
                <DisplayStatus status={status} />
            </Container>
        </>
    );
}