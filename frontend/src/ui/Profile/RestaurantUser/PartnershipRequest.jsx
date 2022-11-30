import React from 'react'
import {PartnershipRequestListing} from "./PartnershipRequestListing.jsx";

export const PartnershipRequest = (props) => {
    const {centers} = props

    return (
        <>
            <section className={'py-5'}>
                {centers.map(center => <PartnershipRequestListing center = {center} key = {center.centerId}/>)}
            </section>
        </>
    )
}