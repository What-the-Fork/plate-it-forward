import {Router} from 'express'
import {
    getAllDonationsController,
    getDonationsByCenterId,
    getDonationsByRestaurantId,
    postDonation,
    putDonation
} from './donation.controller'
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller'
import {check, checkSchema} from 'express-validator'
import {isLoggedIn} from '../../utils/controllers/isLoggedIn.controller'
import {createDonationValidator, editDonationValidator} from "./donation.validator";

const router = Router()
// (/:) directs to specific donation when donationId is provided
router.route('/:donationId').get(asyncValidatorController([
    check('donationId', 'please provide a valid ').isUUID()
]), getAllDonationsController)

router.route('/')
    .get(getAllDonationsController)
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(createDonationValidator)), postDonation)
    // .get(putDonation)
    .put(isLoggedIn("center"), asyncValidatorController(checkSchema(editDonationValidator)), putDonation)

// restaurant seeing their own donations
router.route('/donationRestaurantId/:donationRestaurantId').get(asyncValidatorController([
    check('donationRestaurantId', 'please provide a valid restaurantId ').isUUID()
]), getDonationsByRestaurantId)

// all donations by centerId
router.route('/donationCenterId/:donationCenterId').get(asyncValidatorController([check('donationCenterId', 'please provide a valid centerId ').isUUID()
]), getDonationsByCenterId)

export default router


