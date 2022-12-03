import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers";
import partners from "./partner"

const reducer = combineReducers({centers, partners})
export default configureStore({reducer})