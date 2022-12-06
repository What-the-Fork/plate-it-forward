import {
    getAllCenters,
    getCenterByCenterId,
    getCenterByPartnershipRestaurantId,
    putCenterController
} from "./center.controller";
import { Router } from 'express'
import { asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import { check, checkSchema} from "express-validator";
import { centerValidator } from "./center.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {getRestaurantsByPartnershipCenterId} from "../restaurant/restaurant.controller";

export const CenterRoute: Router = Router()
// '/' prefix directs to center profile
CenterRoute.route('/')
    .post(putCenterController)
    .get(getAllCenters)


// (/:) directs to specific center profile when centerId is provided
CenterRoute.route('/:centerId')
    .get(
        asyncValidatorController([
            check('centerId', 'Please provide a valid Center Id').isUUID()
        ])
        , getCenterByCenterId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(centerValidator)), putCenterController)
CenterRoute.route('/restaurant/partnership/').get(isLoggedIn('restaurant'), getCenterByPartnershipRestaurantId)
