import {Router} from 'express'
import { getAllNumberOfMealsDonatedController, postDonation, putDonation } from './donation.controller'
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller'
import {check, checkSchema} from 'express-validator'
import {isLoggedIn} from '../../utils/controllers/isLoggedIn.controller'
import {donationValidator} from './donation.validator'


const router = Router()
router.route('/:donationId').get(asyncValidatorController([
    check('donationId', 'please provide a valid ').isUUID()
]), getAllNumberOfMealsDonatedController)

router.route('/')
    .get(getAllNumberOfMealsDonatedController)
    .post(isLoggedIn("restaurant"), asyncValidatorController(checkSchema(donationValidator)), postDonation)
    // .get(putDonation)
    .put(isLoggedIn("center"), asyncValidatorController(checkSchema(donationValidator)), putDonation)

export default router


