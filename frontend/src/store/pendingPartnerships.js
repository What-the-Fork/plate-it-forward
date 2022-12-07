import {createSlice} from "@reduxjs/toolkit";


const pendingPartnerSlice = createSlice({
    name: 'pending',
    initialState: [],
    reducers: {
        setAllPending: (pending, action) => action.payload
    }
})

export const {setAllPending} = pendingPartnerSlice.actions

export default pendingPartnerSlice.reducer

export function fetchAllPending