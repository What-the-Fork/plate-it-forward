import React from 'react'
import {RestaurantInfo} from "./RestaurantInfo";
import {PartnershipRequest} from "./PartnershipRequest.jsx";
import {Donations} from "./Donations";

export function ProfileRestaurant() {
    return (
        <>
            <RestaurantInfo/>
            <PartnershipRequest />
            <Donations/>
        </>
    )
}