// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import {Container, InputGroup} from "react-bootstrap";
// import React from "react";
// import styles from "../../../../Partner/partner.module.css";
// import {DisplayError} from "../../display-error/DisplayError.jsx";
// import {DisplayStatus} from "../../display-status/DisplayStatus";
//
// export function CenterSignUpFormContent(props) {
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
//
//     return (
//         <>
//             <Container>
//                 <h1 className={'display-3 text-center mb-5'}>Become a Partner Today</h1>
//             </Container>
//             <Container className={styles.formContainer}>
//                 <Form onSubmit={handleSubmit} className={'border border-dark bg-light my-5 p-5'}>
//
//                     <h4 className={'mb-3'}>Your Information</h4>
//                     <Row>
//                         {/* EMAIL */}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactEmail" className={'mb-3'}>
//                             <Form.Label>Email</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterContactEmail'}
//                                     type="text"
//                                     value={values.centerContactEmail}
//                                     placeholder="Enter email"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterContactEmail'} />
//                         </Form.Group>
//
//                         {/* PASSWORD */}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactPassword" className={'mb-3'}>
//                             <Form.Label>Password</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterContactPassword'}
//                                     type="password"
//                                     value={values.centerPassword}
//                                     placeholder="Enter password"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterContactPassword'} />
//                         </Form.Group>
//
//                         {/* PASSWORD CONFIRM*/}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactConfirmPassword" className={'mb-3'}>
//                             <Form.Label>Confirm Password</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterContactConfirmPassword'}
//                                     type="text"
//                                     value={values.centerContactEmail}
//                                     placeholder="Confirm Password"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterContactConfirmPassword'} />
//                         </Form.Group>
//                     </Row>
//
//                     <Row>
//                         {/* CONTACT NAME */}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactName" className={'mb-3'}>
//                             <Form.Label>Contact Name</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterContactName'}
//                                     type="text"
//                                     value={values.centerContactName}
//                                     placeholder="Jane Doe"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterContactName'} />
//                         </Form.Group>
//
//                         {/* CONTACT PHONE */}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterContactPhone" className={'mb-3'}>
//                             <Form.Label>Contact Phone</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterContactPhone'}
//                                     type="phone"
//                                     value={values.centerContactPhone}
//                                     placeholder="505-555-5555"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterContactPhone'} />
//                         </Form.Group>
//                     </Row>
//
//                     <h4 className={'mt-4 mb-3'}>Community Center Information</h4>
//
//                     <Row>
//                         {/* CENTER NAME */}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterName" className={'mb-3'}>
//                             <Form.Label>Name</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterName'}
//                                     type="text"
//                                     value={values.centerName}
//                                     placeholder="Community Center A"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterName'} />
//                         </Form.Group>
//
//                         {/* STREET */}
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterAddress" className={'mb-3'}>
//                             <Form.Label>Address</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterAddress'}
//                                     type="text"
//                                     value={values.centerAddress}
//                                     placeholder="1234 Main St"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterAddress'} />
//                         </Form.Group>
//                     </Row>
//
//                     {/*<Form.Group className="mb-3" controlId="formRestaurantAddress2">*/}
//                     {/*    <Form.Label>Address 2</Form.Label>*/}
//                     {/*    <Form.Control placeholder="Apartment, studio, or floor" />*/}
//                     {/*</Form.Group>*/}
//
//                     {/* CITY */}
//                     <Row>
//                         <Form.Group as={Col} xs={12} md={6} controlId="formCenterCity" className={'mb-3'}>
//                             <Form.Label>City</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterCity'}
//                                     type="text"
//                                     value={values.centerAddress}
//                                     placeholder="City"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterCity'} />
//                             <Form.Control />
//                         </Form.Group>
//
//                         {/* STATE */}
//                         <Form.Group as={Col} controlId="formCenterState" className={'mb-3'}>
//                             <Form.Label>State</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterContactEmail'}
//                                     type="text"
//                                     value={values.centerContactEmail}
//                                     placeholder="Enter email"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 <Form.Select defaultValue='NM'>
//                                     {/*<option>Choose...</option>*/}
//                                     <option>NM</option>
//                                 </Form.Select>
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterContactEmail'} />
//                         </Form.Group>
//
//                         {/* ZIP */}
//                         <Form.Group as={Col} controlId="formCenterZip" className={'mb-3'}>
//                             <Form.Label>Zip</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     className={'form-control'}
//                                     name={'formCenterZip'}
//                                     type="text"
//                                     value={values.centerAddress}
//                                     placeholder="xxxxx"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                             </InputGroup>
//                             <DisplayError errors={errors} touched={touched} field={'formCenterZip'} />
//                         </Form.Group>
//                     </Row>
//
//                     {/* CHECKBOX ... DO WE WANT?? */}
//                     <Form.Group className={'mt-4 mb-4'} id="formCenterCheckbox">
//                         <Form.Check type="checkbox" label="I confirm all information above is correct." />
//                     </Form.Group>
//
//                     {/* SUBMIT BUTTON */}
//                     <Button variant="primary" type="submit" className={'ms-auto d-flex justify-content-end'}>
//                         Submit
//                     </Button>
//                 </Form>
//                 <DisplayStatus status={status} />
//             </Container>
//         </>
//     );
// }