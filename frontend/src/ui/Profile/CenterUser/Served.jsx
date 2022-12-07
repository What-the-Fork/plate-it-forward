import React from 'react'
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import * as Yup from "yup";
import {httpConfig} from "../../../utils/http-config.js";
import {Formik} from "formik";
import {useSelector} from "react-redux";
import {DisplayError} from "../../Shared/Components/display-error/DisplayError.jsx";
import {FormDebugger} from "../../Shared/Components/FormDebugger.jsx";
import {DisplayStatus} from "../../Shared/Components/display-status/DisplayStatus.jsx";

export const Served = () => {

    const served = {
        donationNumberOfMealsServed: '',
        serveDate: ''
    }

    const serveValidator = Yup.object().shape({
        donationNumberOfMealsServed: Yup.number()
            .required('A valid number is required')
            .min(1, 'Please provide number of meals served')
            .max(999, 'Please provide a number between 0 - 999'),
        serveDate: Yup.date()
            .min(new Date(), 'Date cannot precede current date')
            .required('A valid date is required')

    })

    const submitServed = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/donation/', values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            })
    }

    return (

        <Formik
            initialValues={served}
            onSubmit={submitServed}
            validationSchema={serveValidator}
        >
            {ServedFormContent}
        </Formik>
    )
}

function ServedFormContent(props) {

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
    const {partners} = props
    const {partnershipRestaurantId, partnershipApproved} = partners
    const restaurant = useSelector(state => state.restaurant ? state.restaurant.filter(restaurant => restaurant.restaurantId === partnershipRestaurantId && !partnershipApproved)[0] : null)
    // const partners = useSelector(state => state.partners ? state.partners.filter(partner => partner.restaurantId === partnershipRestaurantId && !partnershipApproved)[0] : null)
    console.log(partners)
    if (partners === null) {
        return (<></>)
    }
    return (
            <>
                <Container>
                    <h3 className={'pb-2'}>Donations</h3>
                    <p className={'fst-italic'}>Confirm Your Donations</p>
                    <Form onSubmit={handleSubmit} className={'mb-5'}>
                        <Row className="mb-3">

                            {/* NUMBER OF MEALS SERVED */}
                            <Form.Group className={'mb-3'} as={Col} controlId="donationNumberOfMealsServed" xs={12} md={6}>
                                <h5 className={' p-2 bg-light text white'}>{restaurant.restaurantName}</h5>
                                <Form.Label>Number of Meals Donated</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className={'form-control'}
                                        name={'donationNumberOfMealsServed'}
                                        type="text"
                                        value={values.donationNumberOfMealsServed}
                                        placeholder="Enter numbers of meals served"
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'formDonationNumberOfMealsServed'} />
                            </Form.Group>

                            {/* DONATION DATE */}
                            <Form.Group className={'mb-3'} as={Col} controlId="formGridServeDate" xs={12} md={6}>
                                <Form.Label>Served Date</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        className={'form-control'}
                                        name={'serveDate'}
                                        type="text"
                                        value={values.serveDate}
                                        placeholder="Enter serve date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                </InputGroup>
                                <DisplayError errors={errors} touched={touched} field={'formServeDate'} />
                            </Form.Group>
                        </Row>

                        {/* SUBMIT BUTTON */}
                        <Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className={'ms-auto d-flex justify-content-end'}>
                                Submit
                            </Button>
                            {' '}
                        </Form.Group>
                        <FormDebugger {...props} />
                    </Form>
                    <DisplayStatus status={status} />
                </Container>
            </>
            )
            }