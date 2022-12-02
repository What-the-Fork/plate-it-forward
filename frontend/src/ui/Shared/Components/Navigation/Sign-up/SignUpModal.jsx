import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {CenterSignUpForm} from "./CenterSignUpForm.jsx";
import {RestaurantSignUpForm} from "./RestaurantSignUpForm";


export const SignUpModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} size='sm' >
                Partner with us!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RestaurantSignUpForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
