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
import {getRestaurantsByPartnershipCenterId} from "../restaurant/restaurant.controller";
import {getCenterByPartnershipRestaurantId} from "../center/center.controller";

// restaurant sending partnership request
const router = Router()
    // DOOR for partnership request by restaurant
router.route('/partnershipRestaurantId/:partnershipRestaurantId').get(asyncValidatorController([
    check('partnershipRestaurantId', 'please provide a valid ').isUUID()
]), postPartnership)

// center accepting partnership request
router.route('/')
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(partnershipValidator)), postPartnership)
    .put(isLoggedIn("center"), asyncValidatorController(checkSchema(partnershipValidator)), putPartnership)

// restaurant seeing center partnership
router.route('/partnershipByRestaurantId/:partnershipByRestaurantId')
    .get(
    asyncValidatorController([check('partnershipByRestaurantId', 'please provide a valid restaurantId ').isUUID()]),
    getPartnershipByPartnershipRestaurantId)

// center seeing restaurant partnerships
router.route('/partnershipCenterId/:partnershipCenterId')
    .get(getRestaurantsByPartnershipCenterId)
    .get(asyncValidatorController([check('partnershipCenterId', 'please provide a valid centerId ').isUUID()
]), getPartnershipByPartnershipCenterId)

export default router