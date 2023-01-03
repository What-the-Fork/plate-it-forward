import { Schema } from 'express-validator'

// blueprint for donation entity
export const createDonationValidator: Schema = {
    donationCenterId: {
        isUUID: {
            errorMessage: 'please provide a valid donationCenterId'
        }
    },
    donationRestaurantId: {
        isUUID: {
            errorMessage: 'please provide a valid donationRestaurantId'
        }
    },
    donationDate: {
        isDate: true,
        errorMessage: 'Donation date format is not supported. Please try YYYY/MM/DD',
        optional: {
            options: {
                nullable: true
            }
        },
    },
    donationNumberOfMealsDonated: {
        isLength: {
            errorMessage: 'Please provide number of meals donated',
            options: {min: 1, max: 8}
        },
        // trim prevents empty characters for security
        trim: true,
        // escape - prevents smiley face of doom/ any malicious code being inserted
        escape: true
    },
}
export const editDonationValidator: Schema = {
    ...createDonationValidator,
    donationNumberOfMealsServed: {
        isLength: {
            errorMessage: 'Please provide number of meals served',
            options: {min: 1, max: 8}
        },
        trim: true,
        escape: true
    },
    donationServeDate: {
        isDate: true,
        errorMessage: 'Donation date format is not supported. Please try YYYY/MM/DD',
        optional: {
            options: {
                nullable: true
            },
        },
    },
}