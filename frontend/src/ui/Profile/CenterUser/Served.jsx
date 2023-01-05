import React from 'react'
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import * as Yup from "yup";
import {httpConfig} from "../../../utils/http-config.js";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {DisplayError} from "../../Shared/Components/display-error/DisplayError.jsx";
import {FormDebugger} from "../../Shared/Components/FormDebugger.jsx";
import {DisplayStatus} from "../../Shared/Components/display-status/DisplayStatus.jsx";
import {fetchPendingDonationsByDonationCenterId} from "../../../store/donations.js";

export const Served = (props) => {

    const {donation, centerId} = props
    const dispatch = useDispatch()
    const restaurant = useSelector(state => state.partnerRestaurants[donation.donationRestaurantId])
    const served = {
        donationId: donation.donationId,
        donationCenterId: donation.donationCenterId,
        donationRestaurantId: donation.donationRestaurantId,
        donationNumberOfMealsDonated: donation.donationNumberOfMealsDonated,
        donationDate: donation.donationDate,
        donationNumberOfMealsServed: '',
        donationServeDate: '',
    }

    const date = new Date()
    const yesterday = new Date(date)
    yesterday.setDate(date.getDate() - 1)
    const serveValidator = Yup.object().shape({
        donationNumberOfMealsServed: Yup.number()
            .required('A valid number is required')
            .min(1, 'Please provide number of meals served')
            .max(999, 'Please provide a number between 0 - 999'),
        donationServeDate: Yup.date()
            .min((yesterday), 'Date cannot precede current date')
            .required('A valid date is required')

    })

    const submitServed = (values, {resetForm, setStatus}) => {
        const donationServeDate = values.donationServeDate.split("/").reverse().join("/");
        httpConfig.put('/apis/donation/', {...values, donationServeDate})
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                    dispatch(fetchPendingDonationsByDonationCenterId(centerId))
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
            {(props) => {
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
                            <h3 className={'pb-2'}>Donations</h3>
                            <p className={'fst-italic'}>Confirm Your Donations</p>
                            <Form onSubmit={handleSubmit} className={'mb-5'}>
                                <Row className="mb-3">

                                    {/* NUMBER OF MEALS SERVED */}
                                    <Form.Group className={'mb-3'} as={Col} controlId="donationNumberOfMealsServed" xs={12} md={6}>
                                        <h5 className={' p-2 bg-light text white'}>{restaurant.restaurantName}</h5>
                                        <Form.Label>Number of Meals Served</Form.Label>
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
                                                name={'donationServeDate'}
                                                type="text"
                                                value={values.donationServeDate}
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
            }}
        </Formik>
    )
}