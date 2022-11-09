import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {signUpValidator} from "./sign-up.validator";
import {signUpController} from "./sign-up.controller";
export const signUpRoute = Router()
signUpRoute.route('/').post(
    asyncValidatorController(checkSchema(signUpValidator)),
    signUpController
    )
