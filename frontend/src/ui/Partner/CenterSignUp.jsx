import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import styles from './partner.module.css'

export function CenterSignUp() {
    return (
        <>
            <Container>
                <h1 className={'display-3 text-center mb-5'}>Become a Partner Today</h1>
            </Container>
            <Container className={styles.formContainer} >
                {/* CONDITIONAL RENDERING OF SAME FORM OR TWO SEPARATE FORMS (ONE CENTER, ONE RESTAURANT)??? */}
                <Form className={'bg-light border border-dark p-5 mb-5'} id={'formFields'}>

                    {/* CENTER OR RESTAURANT NAME */}
                    <Form.Group className="mb-3" controlId="formCenterOrRestaurantName">
                        <Form.Label>Community Center or Restaurant Name</Form.Label>
                        <Form.Control type="text" placeholder="Center A or Restaurant 1" />
                    </Form.Group>

                    {/* CENTER OR RESTAURANT ADDRESS */}
                    <Form.Group className="mb-3" controlId="formCenterOrRestaurantAddress">
                        <Form.Label>Community Center or Restaurant Address</Form.Label>
                        <Form.Control type="address" placeholder="123 Example Blvd SE Albuquerque, NM 87102" />
                    </Form.Group>

                    {/* CONTACT NAME */}
                    <Form.Group className="mb-3" controlId="formContactName">
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control type="text" placeholder="Jane Doe" />
                    </Form.Group>

                    {/* CONTACT EMAIL */}
                    <Form.Group className="mb-3" controlId="formContactEmail">
                        <Form.Label>Contact Email</Form.Label>
                        <Form.Control type="email" placeholder="example@example.com" />
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    {/* CONTACT PHONE */}
                    <Form.Group className="mb-5" controlId="formContactPhone">
                        <Form.Label>Contact Phone</Form.Label>
                        <Form.Control type="phone" placeholder="505-555-5555" />
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your number with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    {/* SUBMIT BUTTON */}
                    <Button variant="primary" type="submit" className={'ms-auto d-flex justify-content-end'}>Submit</Button>
                </Form>
            </Container>
        </>
    )
}