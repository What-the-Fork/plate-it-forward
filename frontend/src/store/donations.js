import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";

const donationsSlice = createSlice({
    name: "donations",
    initialState:[],
    reducers: {
        setAllDonations: (donations, action) => {
            return action.payload
        }
    }
})

export const {setAllDonations} = donationsSlice.actions

export const fetchDonationsByDonationRestaurantId = () => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/donation/`)
    dispatch(setAllDonations(data))
    let
}

export default donationsSlice.reducer