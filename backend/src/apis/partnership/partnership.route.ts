import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {
    getPartnershipByPartnershipCenterId,
    getPartnershipByPartnershipRestaurantId,
    postPartnership,
    putPartnership
} from "./partnership.controller";
import {partnershipValidator} from "./partnership.validator";

const router = Router()
router.route('/partnershipRestaurantId/:partnershipRestaurantId').get(asyncValidatorController([
    check('partnershipRestaurantId', 'please provide a valid ').isUUID()
]), postPartnership)

router.route('/')
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(partnershipValidator)), postPartnership)
    .put(isLoggedIn("center"), asyncValidatorController(checkSchema(partnershipValidator)), putPartnership)

router.route('/partnershipRestaurantId/:partnershipRestaurantId').get(asyncValidatorController([check('partnershipRestaurantId', 'please provide a valid restaurantId ').isUUID()
]), getPartnershipByPartnershipRestaurantId)

router.route('/partnershipCenterId/:partnershipCenterId').get(asyncValidatorController([check('partnershipCenterId', 'please provide a valid centerId ').isUUID()
]), getPartnershipByPartnershipCenterId)

export default router