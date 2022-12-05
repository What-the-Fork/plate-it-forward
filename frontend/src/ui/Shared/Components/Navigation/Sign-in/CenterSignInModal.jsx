import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {CenterSignInForm} from "./CenterSignInForm";


export const CenterSignInModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} size='sm' >
                Community Center Sign In
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static"
                   keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Center Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CenterSignInForm/>
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
