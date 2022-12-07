import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'
import {addPartners, fetchPartnershipsByPartnershipCenterId} from "./partner.js";

const partnerCenterSlice = createSlice({
    name: "centers",
    initialState: [],
    reducers: {
        setAllCenters: (centers, action) => action.payload
    }
})

export const {setAllCenters} = partnerCenterSlice.actions

export default partnerCenterSlice.reducer

export const fetchCenterByPartnershipRestaurantId = (restaurantId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/center/restaurant/partnership/`)
    dispatch(setAllCenters(data))
}
