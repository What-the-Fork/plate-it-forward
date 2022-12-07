import React, {useState} from "react";
import {Button, Modal, Row} from "react-bootstrap";
import {CenterSignUpForm} from "./CenterSignUpForm.jsx";
import {RestaurantSignUpForm} from "./RestaurantSignUpForm";


export const SignUpModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row xl={4} className={'justify-content-center'}>
                <Button variant="primary btn-lg" onClick={handleShow} >
                    Partner with us!
                </Button>
            </Row>
            <Modal className={'modal-lg'} show={show} onHide={handleClose} backdrop="static"
                   keyboard={false}>
                <Modal.Header closeButton>
                    {/*<Modal.Title>Sign Up</Modal.Title>*/}
                </Modal.Header>
                <Modal.Body>
                    <RestaurantSignUpForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}
