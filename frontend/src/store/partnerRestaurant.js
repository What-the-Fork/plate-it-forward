import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'
import {addPartners, fetchPartnershipsByPartnershipCenterId} from "./partner.js";

const partnerRestaurantSlice = createSlice({
    name: "partnerRestaurants",
    initialState: {},
    reducers: {
        setAllPartnerRestaurants: (restaurants, action) => action.payload,
        setPartnerRestaurantByRestaurantId: (restaurants, action) => {restaurants[action.payload.id] = action.payload.data

        }
    }
})

export const {setAllPartnerRestaurants} = partnerRestaurantSlice.actions

export const fetchRestaurantsByPartnershipCenterId = (centerId) => async (dispatch, getState) => {

    const {data} = await httpConfig.get(`/apis/partnership/partnershipCenterId/${centerId}`)
    console.log(data)
    if (Array.isArray(data) === false) {
        throw new Error('Data is malformed')
    }

    const partnerDictionary = data.reduce((accumulator, currentValue) => {
            accumulator[currentValue.restaurantId] = currentValue
            return accumulator
        },
        {}
    )
    dispatch(setAllPartnerRestaurants(partnerDictionary))
}

export default partnerRestaurantSlice.reducer