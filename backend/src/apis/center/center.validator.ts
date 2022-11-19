import {Schema} from "express-validator";

// blueprint for center entity
export const centerValidator: Schema = {
    centerId: {
        isUUID: {
            errorMessage: 'Please provide a valid CenterId'
        }
    },
    centerAddress: {
        isLength: {
            errorMessage: 'Please provide an address',
            options: {min: 1, max: 128}
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