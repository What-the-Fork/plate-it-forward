import { getRestaurantByRestaurantId, putRestaurantController} from "./restaurant.controller";
import { Router } from 'express'
import { asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import { check, checkSchema} from "express-validator";
import { restaurantValidator} from "./restaurant.validator";

export const RestaurantRoute: Router = Router()
RestaurantRoute.route('/')
    .post(putRestaurantController)

RestaurantRoute.route('/:restaurantId')
    .get(
        asyncValidatorController([
            check('restaurantId', 'Please provide a valid restaurantId').isUUID()
        ])
        , getRestaurantByRestaurantId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(restaurantValidator)), putRestaurantController)