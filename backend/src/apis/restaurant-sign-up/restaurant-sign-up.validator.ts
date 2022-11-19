import {Schema} from "express-validator";

// blueprint for restaurant sign up
export const restaurantSignUpValidator: Schema = {
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
    restaurantPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8, max: 200 }
        }

    },
    restaurantPasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8, max: 200 }
        },
        custom: {
            errorMessage: 'Password confirmation does not match password',
            options: (value, { req, location, path }) => {
                if (value !== req.body.restaurantPassword) {
                    throw new Error('Password confirmation does not match password')
                }

                // Indicates the success of this synchronous custom validator
                return true
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