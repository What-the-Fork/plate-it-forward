import React from 'react'
import {CenterInfo} from "./CenterInfo.jsx";
import {CenterListing} from "../../Center/CenterListing.jsx";

export const CenterInfoLoop = (props) => {
    const {centers} = props

    return (
        <>
            <section className={'py-5'}>
                {centers.map(center => <CenterListing center = {center} key = {center.centerId}/>)}
            </section>
        </>
    )
}