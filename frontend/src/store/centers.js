import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'

const centersSlice = createSlice({
    name: "centers",
    initialState: [],
    reducers: {
        setAllCenters: (centers, action) => action.payload
    }
})

export const {setAllCenters} = centersSlice.actions

export default centersSlice.reducer

export function fetchAllCenters () {
    return async function (dispatch) {
        const {data} = await httpConfig('apis/center')
        dispatch(setAllCenters(data))
    }
}