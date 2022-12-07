import React, {useEffect} from 'react'
import {RestaurantInfo} from "./RestaurantInfo";
import {PartnershipRequest} from "./PartnershipRequest.jsx";
import {Donations} from "./Donations";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth.js";
import {fetchCenterByPartnershipRestaurantId} from "../../../store/partnerCenter.js";
import {fetchAllCenters} from "../../../store/centers.js";

export function ProfileRestaurant() {

    const restaurant = useSelector(state => state.auth ? state.auth : null)
    const centers = useSelector(state => state.centers ? state.centers: [])
    const partnerCenter = useSelector(state => state.partnerCenter.length === 1 ? state.partnerCenter[0] : null)
    console.log(centers)
    console.log(restaurant)
    console.log(partnerCenter)
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchAuth())
        if(restaurant !== null) {
            dispatch(fetchCenterByPartnershipRestaurantId(restaurant.restaurantId))
        }

        dispatch(fetchAllCenters())


    }
    useEffect(initialEffects, [dispatch, restaurant])

    return (
        <>
            {restaurant && <RestaurantInfo restaurant={restaurant}/>}
            {restaurant && <Donations restaurant={restaurant}/>}
            {partnerCenter === null && <PartnershipRequest centers={centers}/>}
        </>
    )
}