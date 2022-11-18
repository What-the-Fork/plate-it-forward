import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {postPartnership, putPartnership} from "./partnership.controller";
import {partnershipValidator} from "./partnership.validator";

const router = Router()
router.route('/partnershipRestaurantId/:partnershipRestaurantId').get(asyncValidatorController([
    check('partnershipRestaurantId', 'please provide a valid ').isUUID()
]), postPartnership)

router.route('/')
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(partnershipValidator)), postPartnership)
    .put(isLoggedIn("center"), asyncValidatorController(checkSchema(partnershipValidator)), putPartnership)

export default router