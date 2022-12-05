import {httpConfig} from "../utils/http-config.js";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAuth} from "./auth.js";


const currentCenterUserSlice = createSlice({
    name: 'center',
    initialState: null,
    reducers: {
        getCurrentCenterByCenterId: (center, action) => {
            return action.payload
        }
    }
})

export const {getCurrentCenterByCenterId} = currentCenterUserSlice.actions

export const fetchCurrentCenter = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()

    if(auth !== null) {
        const{data} = await httpConfig(`/apis/center/${auth.centerId}`)
        dispatch(getCurrentCenterByCenterId(data))
    }
}

export default currentCenterUserSlice.reducer