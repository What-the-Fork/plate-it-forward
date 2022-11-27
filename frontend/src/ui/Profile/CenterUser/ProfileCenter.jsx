import React from 'react'
import {CenterInfo} from "./CenterInfo";
import {PartnershipAccept} from "./PartnershipAccept.jsx";
import { Served} from "./Served.jsx";

export function ProfileCenter() {
    return (
        <>
            <CenterInfo/>
            <PartnershipAccept />
            <Served />
        </>
    )
}