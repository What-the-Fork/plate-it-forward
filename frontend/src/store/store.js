import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers";
import partners from "./partner"
import auth from "./auth.js";

const reducer = combineReducers({centers, partners, auth})
export default configureStore({reducer})