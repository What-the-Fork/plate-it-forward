import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postPartnership, putPartnership} from "./partnership.controller";
import {partnershipValidator} from "./partnership.validator";

const router = Router()
router.route('/:partnershipRestaurantId').get(asyncValidatorController([
    check('partnershipRestaurantId', 'please provide a valid ').isUUID()
]), postPartnership)

router.route('/')
    .get(postPartnership)
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(partnershipValidator)), postPartnership)

router.route('/:partnershipCenterId').get(asyncValidatorController([
    check('partnershipCenterId', 'please provide a valid ').isUUID()
]), putPartnership)

router.route('/')
    .get(putPartnership)
    .post(isLoggedIn("center"), asyncValidatorController(checkSchema(partnershipValidator)), putPartnership)

export default router