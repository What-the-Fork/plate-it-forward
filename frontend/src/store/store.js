import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers.js";

const reducer = combineReducers({centers})
export default configureStore({reducer})