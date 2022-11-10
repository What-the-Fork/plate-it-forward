import {Schema} from "express-validator";

export const restaurantSignUpValidator = Schema = {
    centerAddress: {
        isPostalCode: {
        errorMessage: "Please provide an address",
        },
        trim: true
    },
        isLength: {
            errorMessage: 'center address must be between 0 to 128 characters',
            options: {min: 1, max: 128}
        },
        centerContactEmail: {
            isEmail: {
                errorMessage: 'please provide a valid email'
        },
        isLength: {
            errorMessage: 'center contact email must be shorter than () characters',
            options: {min: 1, max: 128}
        }
        },
        centerContactName: {
            escape: true,
            trim: true,

            isLength: {
        errorMessage: 'center contact name must be between 0 and 64 characters',
                options: {min: 1, max:64}
            },
        },
    centerContactPhone: {
        isNumeric: true,
        isLength: {
            errorMessage: 'Please provide a valid phone number'
        }
        },
        centerPassword: {
            isLength: {
                errorMessage: 'Password must be at least eight characters',
                options: {min: 8, max: 200}
            }
        },
        centerPasswordConfirm: {
            isLength: {
                errorMessage: 'Confirm password must be at least eight characters',
                options: {min: 8, max: 200}
            },
            custom: {
                errorMessage: 'Password confirmation does not match password',
                options: (value: any, {req:, location:, path:}) => {
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
                nullable: true //not nullable, go back to project.sql and figure out more
            }
        },
        isLength: {
            errorMessage: 'center profile image must be between 0 than 128 characters',
            options: {min: 1, max: 128}
        }
    }
