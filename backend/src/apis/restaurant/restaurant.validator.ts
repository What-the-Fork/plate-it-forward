import {Schema} from "express-validator";

export const restaurantValidator: Schema = {
    restaurantId: {
        isUUID: {
            errorMessage: 'Please provide a valid restaurantId'
        }
    },
    restaurantAddress: {
        isLength: {
            errorMessage: 'Please provide an address',
            options: {min: 1, max: 128}
        },
        trim: true
    },
    restaurantContactEmail: {
        isEmail: {
            errorMessage: 'please provide a valid email'
        },
        isLength: {
            errorMessage: 'contact email must be shorter than 128 characters',
            options: {min: 1, max: 128}
        }
    },
    restaurantContactName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'restaurant contact name must be between 0 to 64 characters',
            options: {min: 1, max: 64}
        },
    },
    restaurantContactPhone: {
        isNumeric: true,
        isLength: {
            errorMessage: 'Please provide a valid phone number',
            options: {min: 1, max: 32}
        },
    },
    restaurantName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'restaurant Name must be between 0 to 64 characters',
            options: {min: 1, max: 64}
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    restaurantProfileImgUrl: {
        isURL: true,
        optional: {
            options: {
                nullable: true
            }
        },
        isLength: {
            errorMessage: 'profile image must be between 0 to 255 characters',
            options: {min: 1, max: 255}
        },
    },
}