import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers";
import partners from "./partner"
import auth from "./auth.js";
import partnerCenter from "./partnerCenter.js";
// import restaurants from "./restaurants.js";

const reducer = combineReducers({centers, partners, partnerCenter, auth})
export default configureStore({reducer})