import React from 'react'
import {Container} from "react-bootstrap"


export function Header() {
    return (
        <>
            <section className={'bg-secondary py-5 text-center'}>
                <Container>
                            <h1 className={'display-1'}>Plate it Forward</h1>
                            <p className={'lead'}>Chislic venison cupim, drumstick alcatra hamburger spare ribs pancetta ham.</p>
                </Container>
            </section>
        </>
    )
}