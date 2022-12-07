import React from 'react'
import {PartnershipRequestListing} from "./PartnershipRequestListing.jsx";

export const PartnershipRequest = (props) => {
    const {centers, restaurantId} = props

        return (
            <>
                <section className={'py-5'}>
                    {centers.map(center => <PartnershipRequestListing center={center} restaurantId={restaurantId} key={center.centerId}/>)}
                </section>
            </>
        )
    }