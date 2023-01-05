import {configureStore, combineReducers} from '@reduxjs/toolkit'
import centers from "./centers";
import partners from "./partner"
import auth from "./auth.js";
import partnerCenters from "./partnerCenter.js";
import partnerRestaurants from "./partnerRestaurant.js";
import pending from "./pendingPartnerships"
import donations from "./donations.js";
// import restaurants from "./restaurants.js";

const reducer = combineReducers({centers, partners, pending, partnerCenters, partnerRestaurants, auth, donations})
export default configureStore({reducer})