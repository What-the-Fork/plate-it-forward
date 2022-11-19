import { getRestaurantByRestaurantId, putRestaurantController} from "./restaurant.controller";
import { Router } from 'express'
import { asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import { check, checkSchema} from "express-validator";
import { restaurantValidator} from "./restaurant.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const RestaurantRoute: Router = Router()
// '/' prefix directs to restaurant profile
RestaurantRoute.route('/')
    .post(putRestaurantController)

// (/:) directs to specific restaurant profile when restaurantId is provided
RestaurantRoute.route('/:restaurantId')
    .get(
        asyncValidatorController([
            check('restaurantId', 'Please provide a valid restaurantId').isUUID()
        ])
        , getRestaurantByRestaurantId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(restaurantValidator)), putRestaurantController)