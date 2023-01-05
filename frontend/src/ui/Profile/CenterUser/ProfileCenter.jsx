import React, {useEffect} from 'react'
import {CenterInfo} from "./CenterInfo";
import {PartnershipAccept} from "./PartnershipAccept.jsx";
import { Served } from "./Served.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth.js";
import {fetchPendingByPartnershipCenterId} from "../../../store/pendingPartnerships.js";
import {StaticCenterDonationForm} from "./StaticCenterDonationForm";
import {fetchRestaurantsByPartnershipCenterId} from "../../../store/partnerRestaurant.js";
import {fetchAllRestaurants} from "../../../store/restaurants.js";
import {fetchPendingDonationsByDonationCenterId} from "../../../store/donations.js";

export function ProfileCenter() {

    const center = useSelector(state => state.auth ? state.auth : null)
    const pendings = useSelector(state => state.pending)
    const donations = useSelector(state => state.donations)
    const partnerRestaurants = useSelector(state => {
        if(state?.partnerRestaurants.constructor.name === "Object"){
            return Object.values(state.partnerRestaurants)
        } else {
            return []
        }
    });
console.log(donations)
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAuth())

    }
    const secondaryEffects = () => {
        if(center !== null) {
            dispatch(fetchPendingDonationsByDonationCenterId(center.centerId))
        dispatch(fetchRestaurantsByPartnershipCenterId(center.centerId))
            dispatch(fetchPendingByPartnershipCenterId(center.centerId))
    }}
    useEffect(initialEffects, [dispatch])
    useEffect(secondaryEffects, [dispatch, center])

    return (
        <>
            {/*conditional render to prevent undefine, will crash page*/}
            {center && <CenterInfo center={center}/>}
            <section className={'py-5'}>
                {center && pendings.map(partner => <PartnershipAccept partner={partner} centerId={center.centerId} key={partner.partnershipRestaurantId}/>)}
            </section>
            {/*<StaticCenterDonationForm/>*/}
            {donations.map(donation => <Served key={donation.donationId} donation = {donation} centerId = {center.centerId}/>)}
        </>
    )
}