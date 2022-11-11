import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema, param} from "express-validator";
import {centerSignUpValidator} from "./center-sign-up.validator";
import {centerSignUpController} from "./center-sign-up.controller";
import {centerActivationController} from "./center.activation.controller";
export const centerSignUpRoute = Router()
centerSignUpRoute.route('/')
    .post(
    asyncValidatorController(checkSchema(centerSignUpValidator)),
    centerSignUpController
    )
centerSignUpRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        centerActivationController
    )