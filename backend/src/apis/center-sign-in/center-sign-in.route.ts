import { Router } from 'express'
import { asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import { centerSignInValidator } from './center-sign-in.validator'
import { centerSignInController} from "./center-sign-in.controller";
import { checkSchema} from "express-validator";

export const centerSignInRouter: Router = Router()

centerSignInRouter.route('/')
    .post(asyncValidatorController(checkSchema(centerSignInValidator)), centerSignInController)