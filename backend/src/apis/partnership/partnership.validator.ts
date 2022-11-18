import { Schema } from 'express-validator'

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
        isBoolean: true,
        errorMessage: 'partnership not valid',
    }
}