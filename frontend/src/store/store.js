import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers";
import partners from "./partner"
import auth from "./auth.js";
import partnerCenter from "./partnerCenter.js";
import pending from "./pendingPartnerships"
// import restaurants from "./restaurants.js";

const reducer = combineReducers({centers, partners, pending, partnerCenter, auth})
export default configureStore({reducer})