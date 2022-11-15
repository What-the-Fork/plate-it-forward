import { getCenterByCenterId, putCenterController} from "./center.controller";
import { Router } from 'express'
import { asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import { check, checkSchema} from "express-validator";
import { centerValidator} from "./center.validator";

export const CenterRoute: Router = Router()
CenterRoute.route('/')
    .post(putCenterController)

CenterRoute.route('/:centerId')
    .get(
        asyncValidatorController([
            check('centerId', 'Please provide a valid CenterId').isUUID()
        ])
        , getCenterByCenterId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(centerValidator)), putCenterController)