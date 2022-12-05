import {httpConfig} from "../utils/http-config.js";
import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'singleRestaurant',
    initialState: {},
    reducers: {
        setSingleRestaurant: (singleRestaurant, action) => {
            singleRestaurant[action.payload.restaurantId] = action.payload.data
        }
    }
})

export const {setSingleRestaurant} = slice.actions

export const fetchSingleRestaurantByRestaurantId = (restaurantId) => async (dispatch, getState) => {
    const state = getState()

    const singleRestaurant = state.singleRestaurant
    if(singleRestaurant[restaurantId] === undefined) {
        const{data} = await httpConfig(`/apis/restaurant/${restaurantId}`)
        dispatch(setSingleRestaurant({restaurantId, data}))
    }
}

export default slice.reducer 