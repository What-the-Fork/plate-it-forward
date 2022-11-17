import { Schema } from 'express-validator'

export const partnershipValidator: Schema = {
    partnershipCenterId: {
        isUUID: {
            errorMessage: 'please provide a valid donationCenterId'
        }
    },
    partnershipRestaurantId: {
        isUUID: {
            errorMessage: 'please provide a valid donationRestaurantId'
        }
    },
    partnershipApproved: {
        isBoolean: true,
        errorMessage: 'partnership not valid',
    }
}