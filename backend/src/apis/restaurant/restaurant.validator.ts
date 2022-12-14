import {Schema} from "express-validator";

// blueprint for restaurant entity
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
        // trim prevents empty characters for security
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
        // escape - prevents smiley face of doom/ any malicious code being inserted
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'restaurant contact name must be between 0 to 64 characters',
            options: {min: 1, max: 64}
        },
    },
    restaurantContactPhone: {
        isMobilePhone: {
            errorMessage: 'Please provide a valid phone number',
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