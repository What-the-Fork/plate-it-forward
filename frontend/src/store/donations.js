import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";
import {addPartners} from "./partner.js";

const donationSlice = createSlice({
    name: "donation",
    initialState: {},
    reducers: {
        addDonation: (donation, action) => {
            donation[action.payload.restaurantId] = action.payload.data
        },
    }
})

export const {addDonation} = donationSlice.actions

export const fetchDonationsByDonationRestaurantId = (restaurantId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/donation/donationRestaurantId/${restaurantId}`)
    const payload = {centerId, data}
    dispatch(addPartners(payload))
}

export default donationSlice.reducer