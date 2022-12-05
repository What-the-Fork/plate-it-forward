import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {RestaurantSignInForm} from "./RestaurantSignInForm";


export const RestaurantSignInModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} size='sm'>
                Restaurant Sign In
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static"
                   keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Restaurant Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RestaurantSignInForm/>
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
