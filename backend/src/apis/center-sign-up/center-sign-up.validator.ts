import {Schema} from "express-validator";

// blueprint for center sign up
export const centerSignUpValidator: Schema = {
    centerAddress: {
        isLength: {
            errorMessage: 'Please provide an address',
            options: {min: 10, max: 128}
        },
        // trim prevents empty characters for security
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
        // escape - prevents smiley face of doom/ any malicious code being inserted
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Center contact name must be between 0 to 64 characters',
            options: {min: 1, max: 64}
        },
    },
    centerContactPhone: {
        isMobilePhone: {
            errorMessage: 'Please provide a valid phone number',
        },
    },
    centerName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Center Name must be between 0 to 64 characters',
            options: {min: 5, max: 64}
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