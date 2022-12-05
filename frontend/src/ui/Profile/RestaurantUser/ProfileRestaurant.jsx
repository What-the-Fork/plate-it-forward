import React, {useEffect} from 'react'
import {RestaurantInfo} from "./RestaurantInfo";
import {PartnershipRequest} from "./PartnershipRequest.jsx";
import {Donations} from "./Donations";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth.js";

export function ProfileRestaurant() {

    const restaurant = useSelector(state => state.auth ? state.auth : null)
    console.log(restaurant)

    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAuth())

    }
    useEffect(initialEffects, [dispatch])

    return (
        <>
            {restaurant && <RestaurantInfo restaurant={restaurant}/>}
            {/*<PartnershipRequest/>*/}
            <Donations/>
        </>
    )
}