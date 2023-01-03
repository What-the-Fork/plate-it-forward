// import React, {useState} from 'react'
// import * as Yup from "yup";
// import {Formik} from "formik";
// import {useSelector} from "react-redux";
// import {Col, Container, InputGroup, Row} from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import {DisplayError} from "../../Shared/Components/display-error/DisplayError.jsx";
// import Button from "react-bootstrap/Button";
// import {DisplayStatus} from "../../Shared/Components/display-status/DisplayStatus.jsx";
// import {httpConfig} from "../../../utils/http-config.js";
//
// export const DonationForm() {
//     const [inputFields, setInputFields] = useState([
//         {donationNumberOfMealsDonated: '', donationDate: '' }
//     ])
//
//     const donationValidator = Yup.object().shape({
//         donationNumberOfMealsDonated: Yup.number()
//             .required('A valid integer is required')
//             .min(1, 'Your donation total must be 1 or more')
//             .max(4, 'Your donation total must not exceed 999'),
//         donationDate: Yup.number()
//             .required('A valid integer is required')
//             .min(1, 'Your donation total must be 1 or more')
//             .max(4, 'Your donation total must not exceed 999'),
//     });
//
//     const submitDonation = (values, {resetForm, setStatus}) => {
//         httpConfig.post('/apis/donation/', values)
//             .then(reply => {
//                 let {message, type} = reply;
//
//                 if (reply.status === 200) {
//                     resetForm();
//                 }
//                 setStatus({message, type});
//             })
//     }
//
//
//     return (
//         <Formik
//             initialValues={donation}
//             onSubmit={submitDonation}
//             validationSchema={donationValidator}
//         >
//             {ServedFormContent}
//         </Formik>
//     );
// }
//
// function ServedFormContent(props) {
//
//     const {
//         status,
//         values,
//         errors,
//         touched,
//         // dirty,
//         // isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit
//         // handleReset
//     } = props
//     const {partners} = props
//     const {partnershipRestaurantId, partnershipApproved} = partners
//     const restaurant = useSelector(state => state.restaurant ? state.restaurant.filter(restaurant => restaurant.restaurantId === partnershipRestaurantId && !partnershipApproved)[0] : null)
//     // const partners = useSelector(state => state.partners ? state.partners.filter(partner => partner.restaurantId === partnershipRestaurantId && !partnershipApproved)[0] : null)
//     console.log(partners)
//     if (partners === null) {
//         return (<></>)
//     }
//     return (
//         <>
//             <Container>
//                 <h3 className={'pb-2'}>Donations</h3>
//                 <p className={'fst-italic'}>Confirm Your Donations</p>
//                 <Form onSubmit={handleSubmit} className={'mb-5'}>
//                     <Row className="mb-3">
//
//                         {/* NUMBER OF MEALS SERVED */}
//                         <Form.Group className={'mb-3'} as={Col} controlId="donationNumberOfMealsServed" xs={12} md={6}>
//                             <h5 className={' p-2 bg-light text white'}>{restaurant.restaurantName}</h5>
//                             <Form.Label>Number of Meals Donated</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'donationNumberOfMealsServed'}
//                                     type="text"
//                                     value={values.donationNumberOfMealsServed}
//                                     placeholder="Enter numbers of meals served"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}/>
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formDonationNumberOfMealsServed'} />
//                         </Form.Group>
//
//                         {/* DONATION DATE */}
//                         <Form.Group className={'mb-3'} as={Col} controlId="formGridServeDate" xs={12} md={6}>
//                             <Form.Label>Served Date</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'serveDate'}
//                                     type="text"
//                                     value={values.serveDate}
//                                     placeholder="Enter serve date"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}/>
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formServeDate'} />
//                         </Form.Group>
//                     </Row>
//
//                     {/* SUBMIT BUTTON */}
//                     <Form.Group>
//                         <Button
//                             variant="primary"
//                             type="submit"
//                             className={'ms-auto d-flex justify-content-end'}>
//                             Submit
//                         </Button>
//                         {' '}
//                     </Form.Group>
//                     <FormDebugger {...props} />
//                 </Form>
//                 <DisplayStatus status={status} />
//             </Container>
//         </>
//     )
// }