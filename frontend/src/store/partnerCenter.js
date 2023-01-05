import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'
import {addPartners, fetchPartnershipsByPartnershipCenterId} from "./partner.js";

const partnerCenterSlice = createSlice({
    name: "partnerCenters",
    initialState: [],
    reducers: {
        setAllCenters: (centers, action) => action.payload
    }
})

export const {setAllCenters} = partnerCenterSlice.actions

export const fetchCenterByPartnershipRestaurantId = (restaurantId) => async (dispatch, getState) => {
    const {data} = await httpConfig.get(`/apis/center/restaurant/partnership/`)
    dispatch(setAllCenters(data))
}

export default partnerCenterSlice.reducer
