import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema, param} from "express-validator";
import {restaurantSignUpValidator} from "./restaurant-sign-up.validator";
import {restaurantSignUpController} from "./restaurant-sign-up.controller";
import {restaurantActivationController} from "./restaurant.activation.controller";

export const restaurantSignUpRoute = Router()
// '/' prefix directs to sign up validation
restaurantSignUpRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(restaurantSignUpValidator)),
        restaurantSignUpController
    )
// (/:) directs to specific URL provided in activation email
restaurantSignUpRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        restaurantActivationController
    )