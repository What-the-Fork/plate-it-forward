import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'

const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: [],
    reducers: {
        setAllRestaurants: (centers, action) => action.payload
    }
})

export const {setAllRestaurants} = restaurantsSlice.actions

export default restaurantsSlice.reducer

export function fetchAllRestaurants () {
    return async function (dispatch) {
        const {data} = await httpConfig('apis/restaurant')
        dispatch(setAllRestaurants(data))
    }
}
