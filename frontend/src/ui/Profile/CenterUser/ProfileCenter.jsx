import React, {useEffect} from 'react'
import {CenterInfo} from "./CenterInfo";
import {PartnershipAccept} from "./PartnershipAccept.jsx";
import { Served } from "./Served.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth.js";
import {fetchPartnershipsByPartnershipCenterId} from "../../../store/partner.js";
import {fetchPendingByPartnershipCenterId} from "../../../store/pendingPartnerships.js";

export function ProfileCenter() {

    const center = useSelector(state => state.auth ? state.auth : null)
    const pendings = useSelector(state => state.pending)
    console.log(pendings)
    const partners = useSelector( state => {
        if (center !== null){


            return  state.partners [center.centerId] ?? []
            }
        return []
    })
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAuth())

    }
    const secondaryEffects = () => {
        if(center !== null) {
        dispatch(fetchPartnershipsByPartnershipCenterId(center.centerId))
            dispatch(fetchPendingByPartnershipCenterId(center.centerId))
    }}
    useEffect(initialEffects, [dispatch])
    useEffect(secondaryEffects, [dispatch, center])

    return (
        <>
            {/*conditional render to prevent undefine, will crash page*/}
            {center && <CenterInfo center={center}/>}
            <section className={'py-5'}>
                {pendings.map(partner => <PartnershipAccept partner={partner}  key={partner.partnershipRestaurantId}/>)}
            </section>
            {/*<Served/>*/}
        </>
    )
}