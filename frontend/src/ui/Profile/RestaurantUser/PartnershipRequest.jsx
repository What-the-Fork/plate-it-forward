import React from 'react'
import {PartnershipRequestListing} from "./PartnershipRequestListing.jsx";

export const PartnershipRequest = (props) => {
    const {centers, restaurantId} = props

        return (
            <>
                <h1 className={'display-6 text-center mt-4'}>Choose a community center to partner with</h1>
                <section className={'py-5'}>
                    {centers.map(center => <PartnershipRequestListing center={center} restaurantId={restaurantId} key={center.centerId}/>)}
                </section>
            </>
        )
    }