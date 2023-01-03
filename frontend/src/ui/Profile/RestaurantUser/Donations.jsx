import React from "react";
import {Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {httpConfig} from "../../../utils/http-config.js";
import {Formik} from "formik";
import {DisplayError} from "../../Shared/Components/display-error/DisplayError.jsx";
import {FormDebugger} from "../../Shared/Components/FormDebugger.jsx";
import {DisplayStatus} from "../../Shared/Components/display-status/DisplayStatus.jsx";
import {useSelector} from "react-redux";

export const Donations = (props) => {
    const {restaurant, center} = props
    console.log(center)
    const donationRestaurantId = restaurant.restaurantId
    const donationCenterId = center.centerId
    const donation = {
        donationNumberOfMealsDonated: '',
        donationDate: ''
    }
    const date = new Date()
    const yesterday = new Date(date)
    yesterday.setDate(date.getDate() - 1)
    const donationValidator = Yup.object().shape({
        donationNumberOfMealsDonated: Yup.number()
            .required('A valid number is required')
            .min(1, 'Please provide number of meals donated')
            .max(999, 'Please provide a number between 0 - 999'),
        donationDate: Yup.date()
            .min((yesterday), 'Date cannot precede current date')
            .required('A valid date is required')

    })

    const submitDonation = (values, {resetForm, setStatus}) => {
        const donationDate = values.donationDate.split("/").reverse().join("/");
        console.log(donationDate)
        httpConfig.post('/apis/donation/', {donationNumberOfMealsDonated: values.donationNumberOfMealsDonated, donationRestaurantId, donationCenterId, donationDate})
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
            initialValues={donation}
            onSubmit={submitDonation}
            validationSchema={donationValidator}
        >
            {DonationFormContent}
        </Formik>
    )
}

function DonationFormContent(props) {

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

const partnerCenter = useSelector(state => state.partnerCenter.length === 1 ? state.partnerCenter[0] : null)
    console.log(partnerCenter)
    if (partnerCenter === null) {
        return (<></>)
    }
    return (
        <>
            <Container>
                <h3 className={'pb-2'}>Donations</h3>
                <p className={'fst-italic'}>Confirm Your Donations</p>
                <Form onSubmit={handleSubmit} className={'mb-5'}>
                    <Row className="mb-3">

                        {/* NUMBER OF MEALS DONATED */}
                        <Form.Group className={'mb-3'} as={Col} controlId="donationNumberOfMealsDonated" xs={12} md={6}>
                            <h5 className={' p-2 bg-light text white'}>{partnerCenter.centerName}</h5>
                            <Form.Label>Number of Meals Donated</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'donationNumberOfMealsDonated'}
                                    type="text"
                                    value={values.donationNumberOfMealsDonated}
                                    placeholder="Enter numbers of meals donated"
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formDonationNumberOfMealsDonated'} />
                        </Form.Group>

                        {/* DONATION DATE */}
                        <Form.Group className={'mb-3'} as={Col} controlId="formGridServeDate" xs={12} md={6}>
                            <Form.Label>Donation Date</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    className={'form-control'}
                                    name={'donationDate'}
                                    type="text"
                                    value={values.donationDate}
                                    placeholder="Enter donation date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                            </InputGroup>
                            <DisplayError errors={errors} touched={touched} field={'formDonationDate'} />
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