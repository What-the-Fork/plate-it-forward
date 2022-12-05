import {httpConfig} from "../utils/http-config.js";
import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'singleCenter',
    initialState: {},
    reducers: {
        setSingleCenter: (singleCenter, action) => {
            singleCenter[action.payload.centerId] = action.payload.data
        }
    }
})

export const {setSingleCenter} = slice.actions

export const fetchSingleCenterByCenterId = (centerId) => async (dispatch, getState) => {
    const state = getState()

    const singleCenter = state.singleCenter
    if(singleCenter[centerId] === undefined) {
        const{data} = await httpConfig(`/apis/center/${centerId}`)
        dispatch(setSingleCenter({centerId, data}))
    }
}

export default slice.reducer