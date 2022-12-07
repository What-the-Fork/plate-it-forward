import React, {useEffect} from 'react'
import {CenterInfo} from "./CenterInfo";
import {PartnershipAccept} from "./PartnershipAccept.jsx";
import { Served } from "./Served.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth.js";
import {fetchPartnershipsByPartnershipCenterId} from "../../../store/partner.js";

export function ProfileCenter() {

    const center = useSelector(state => state.auth ? state.auth : null)
console.log(center)

    const partners = useSelector( state => state.partners ? state.partners [center.centerId] : [])
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAuth())
        dispatch(fetchPartnershipsByPartnershipCenterId(center.centerId))
    }
    useEffect(initialEffects, [dispatch])

    return (
        <>
            {/*conditional render to prevent undefine, will crash page*/}
            {center && <CenterInfo center={center}/>}
            <section className={'py-5'}>
                {partners.map(partner => <PartnershipAccept partner={partner}  key={partner.partnershipRestaurantId}/>)}
            </section>
            {/*<Served/>*/}
        </>
    )
}