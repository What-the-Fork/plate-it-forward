import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {RestaurantSignInForm} from "./RestaurantSignInForm";


export const RestaurantSignInModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={'btn btn-light btn-lg btn-outline-dark'} onClick={handleShow} size='lg'>
                         Restaurant
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static"
                   keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Restaurant Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RestaurantSignInForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}
