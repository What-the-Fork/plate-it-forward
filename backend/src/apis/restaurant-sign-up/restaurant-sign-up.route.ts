import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import {restaurantSignUpValidator} from "./restaurant-sign-up.validator";
import {restaurantSignUpController} from "./restaurant-sign-up.controller";
export const restaurantSignUpRoute = Router()
restaurantSignUpRoute.route('/').post(
    asyncValidatorController(checkSchema(restaurantSignUpValidator)),
    restaurantSignUpController
)
