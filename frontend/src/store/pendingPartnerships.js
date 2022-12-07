import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";


const pendingPartnerSlice = createSlice({
    name: 'pending',
    initialState: [],
    reducers: {
        addPending: (pending, action) => action.payload
    }
})

export const {addPending} = pendingPartnerSlice.actions


export const fetchPendingByPartnershipCenterId = (centerId) => async (dispatch) => {
        const {data} = await httpConfig.get(`/apis/restaurant/pendingPartnerships/${centerId}`)
        dispatch(addPending(data))
}

export default pendingPartnerSlice.reducer