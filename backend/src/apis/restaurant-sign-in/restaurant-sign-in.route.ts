import { Router } from 'express'
import { asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import { restaurantSignInValidator } from './restaurant-sign-in.validator';
import { restaurantSignInController} from "./restaurant-sign-in.controller";
import { checkSchema} from "express-validator";

export const restaurantSignInRouter: Router = Router()

restaurantSignInRouter.route('/')
    .post(asyncValidatorController(checkSchema(restaurantSignInValidator)), restaurantSignInController)