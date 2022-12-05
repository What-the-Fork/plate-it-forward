import React, {useEffect} from 'react'
import {RestaurantInfo} from "./RestaurantInfo";
import {PartnershipRequest} from "./PartnershipRequest.jsx";
import {Donations} from "./Donations";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCenters} from "../../../store/centers.js";

export function ProfileRestaurant() {

    return (
        <>
            <RestaurantInfo/>
            <PartnershipRequest centers={centers}/>
            <Donations/>
        </>
    )
}