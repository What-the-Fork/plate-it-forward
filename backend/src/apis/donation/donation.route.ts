import {Router} from 'express'
import {
    getAllNumberOfMealsDonatedController,
    postDonation
} from './donation.controller'
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller'
import {check, checkSchema} from 'express-validator'
import {isLoggedIn} from '../../utils/controllers/isLoggedIn.controller'
import {donationValidator} from './donation.validator'
import {selectCenterByDonationRestaurantId} from "../../utils/models/Center";

const router = Router()
router.route('/:donationId').get(asyncValidatorController([
    check('donationId', 'please provide a valid ').isUUID()
]), getAllNumberOfMealsDonatedController)

router.route('/')
    .get(getAllNumberOfMealsDonatedController)
    .get(selectCenterByDonationRestaurantId)
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(donationValidator)), postDonation)

export default router