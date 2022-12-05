import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers";
import partners from "./partner"
import auth from "./auth.js";
import restaurants from "./restaurants.js";

const reducer = combineReducers({centers, restaurants, partners, auth})
export default configureStore({reducer})