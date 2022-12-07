import { Schema } from 'express-validator'

// blueprint for partnership entity
export const partnershipValidator: Schema = {
    partnershipCenterId: {
        isUUID: {
            errorMessage: 'please provide a valid partnershipCenterId'
        }
    },
    partnershipRestaurantId: {
        isUUID: {
            errorMessage: 'please provide a valid partnershipRestaurantId'
        }
    },
    partnershipApproved: {
        // boolean is either true or false, error spit out if invalid
        optional: true,
        isBoolean: true,
        errorMessage: 'partnership not valid',
    }
}