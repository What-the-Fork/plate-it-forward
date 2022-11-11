import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema, param} from "express-validator";
import {restaurantSignUpValidator} from "./restaurant-sign-up.validator";
import {restaurantSignUpController} from "./restaurant-sign-up.controller";
import {restaurantActivationController} from "./restaurant.activation.controller";
export const restaurantSignUpRoute = Router()
restaurantSignUpRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(restaurantSignUpValidator)),
        restaurantSignUpController
    )
restaurantSignUpRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        restaurantActivationController
    )