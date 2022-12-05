import {httpConfig} from "../utils/http-config.js";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAuth} from "./auth.js";


const currentRestaurantUserSlice = createSlice({
    name: 'restaurant',
    initialState: null,
    reducers: {
        getCurrentRestaurantByRestaurantId: (Restaurant, action) => {
            return action.payload
        }
    }
})

export const {getCurrentRestaurantByRestaurantId} = currentRestaurantUserSlice.actions

export const fetchCurrentRestaurant = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()

    if(auth !== null) {
        const{data} = await httpConfig(`/apis/restaurant/${auth.restaurantId}`)
        dispatch(getCurrentRestaurantByRestaurantId(data))
    }
}

export default currentRestaurantUserSlice.reducer