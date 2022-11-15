import { Router } from 'express'
import {
    getAllNumberOfMealsDonatedController,
    getAllNumberOfMealsServedController,
    submitRestaurantDonation
} from './donation.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import { donationValidator } from './donation.validator'

const router = Router()
router.route('/:donationId').get(asyncValidatorController([
    check('donationId', 'please provide a valid ').isUUID()
]), getAllNumberOfMealsDonatedController)

router.route('/:donationId').get(asyncValidatorController([
    check('donationId', 'please provide valid number of meals served.')
]), getAllNumberOfMealsServedController)

router.route('/')
.get(getAllNumberOfMealsDonatedController)
.get(getAllNumberOfMealsServedController)
.post(isLoggedIn, asyncValidatorController(checkSchema(donationValidator)) ,submitRestaurantDonation)

export default router