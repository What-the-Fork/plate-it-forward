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

export const fetchPendingDonationsByDonationCenterId = (centerId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/donation/pending/donationCenterId/${centerId}`)
    dispatch(setAllDonations(data))
}

export default donationsSlice.reducer