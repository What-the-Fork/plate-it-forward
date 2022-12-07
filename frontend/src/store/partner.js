import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'

const partnersSlice = createSlice({
    name: "partners",
    initialState: {},
    reducers: {
        addPartners: (partners, action) => {
            partners[action.payload.centerId] = action.payload.data
        },
        removePartners: (partners, action) => {
            const index = partners[action.payload.centerId].findIndex(partner => action.payload.centerId === partner.partnershipCenterId)
            if (index) {
                delete partners[action.payload.centerId][index]
            }
        }
    }
})

export const {addPartners} = partnersSlice.actions

export const fetchPartnershipsByPartnershipCenterId = (centerId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/partnership/partnershipCenterId/${centerId}`)
    const payload = {centerId, data}
    dispatch(addPartners(payload))
}

export default partnersSlice.reducer
