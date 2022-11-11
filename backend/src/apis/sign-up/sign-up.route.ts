import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema, param} from "express-validator";
import {signUpValidator} from "./sign-up.validator";
import {signUpController} from "./sign-up.controller";
import {activationController} from "./activation.controller";
export const signUpRoute = Router()
signUpRoute.route('/')
    .post(
    asyncValidatorController(checkSchema(signUpValidator)),
    signUpController
    )
signUpRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        activationController
    )
