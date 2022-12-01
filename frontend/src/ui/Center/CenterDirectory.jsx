import React from 'react'
import {CenterListing} from "./CenterListing.jsx";
// commit test
export const CenterDirectory = (props) => {
    const {centers} = props

    return (
        <>
            <section className={'py-5'}>
                {centers.map(center => <CenterListing center = {center} key = {center.centerId}/>)}
            </section>
        </>
    )
}
