import {Schema} from "express-validator";

export const signUpValidator: Schema = {
    centerAddress: {
        isLength: {
            errorMessage: 'Please provide an address',
            options: {min: 1, max: 128}
        },
        trim: true
    },
    centerContactEmail: {
        isEmail: {
            errorMessage: 'please provide a valid email'
        },
        isLength: {
            errorMessage: 'contact email must be shorter than 128 characters',
            options: {min: 1, max: 128}
        }
    },
    centerContactName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Center contact name must be between 0 to 64 characters',
            options: {min: 1, max: 64}
        },
    },
    centerContactPhone: {
        isNumeric: true,
        isLength: {
            errorMessage: 'Please provide a valid phone number',
            options: {min: 1, max: 32}
        },
    },
    centerName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Center Name must be between 0 to 64 characters',
            options: {min: 1, max: 64}
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    centerPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8, max: 200 }
        }

    },
    centerPasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8, max: 200 }
        },
        custom: {
            errorMessage: 'Password confirmation does not match password',
            options: (value, { req, location, path }) => {
                if (value !== req.body.centerPassword) {
                    throw new Error('Password confirmation does not match password')
                }

                // Indicates the success of this synchronous custom validator
                return true
            }
        }
    },
    centerProfileImgUrl: {
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