import React, {useEffect} from 'react'
import {CenterInfo} from "./CenterInfo";
import {PartnershipAccept} from "./PartnershipAccept.jsx";
import { Served} from "./Served.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth.js";

export function ProfileCenter() {

    const center = useSelector(state => state.auth ? state.auth : null)
console.log(center)

    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAuth())

    }
    useEffect(initialEffects, [dispatch])

    return (
        <>
            {/*conditional render to prevent undefine, will crash page*/}
            {center && <CenterInfo center={center}/>}
            <PartnershipAccept />
            <Served />
        </>
    )
}