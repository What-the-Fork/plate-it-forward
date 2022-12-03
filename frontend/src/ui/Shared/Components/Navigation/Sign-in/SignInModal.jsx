import React from 'react'
import {Modal, ModalBody, ModalFooter} from "react-bootstrap";
import {SignInForm} from "./SignInForm";
import Button from "react-bootstrap/Button";

export const SignInModal = (props) => {
    const {handleShow, handleClose, show} = props

    return (
        <>
            <Button onClick={handleShow}>Sign In</Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <SignInForm />
                </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleClose}>Close</Button>
                    </ModalFooter>
            </Modal>
        </>
    )
}