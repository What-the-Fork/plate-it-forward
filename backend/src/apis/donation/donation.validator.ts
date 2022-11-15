import { Schema } from 'express-validator'

export const donationValidator: Schema = {
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
        trim: true,
        escape: true
    },
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