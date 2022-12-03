import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'

const partnersSlice = createSlice({
    name: "partners",
    initialState: {},
    reducers: {
        addPartners: (partners, action) => {
            partners[action.payload.centerId] = action.payload.data
        }
    }
})

export const {addPartners} = partnersSlice.actions

export const fetchRestaurantsByPartnershipCenterId = (centerId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/partnership/partnershipCenterId/${centerId}`)
    const payload = {centerId, data}
    dispatch(addPartners(payload))
}

export default partnersSlice.reducer
