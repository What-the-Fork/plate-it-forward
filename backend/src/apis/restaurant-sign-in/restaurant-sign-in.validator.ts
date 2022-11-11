import {Schema} from "express-validator";

export const restaurantSignInValidator: Schema = {
    restaurantPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    restaurantContactEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
       //normalizeEmail: true,
        trim: true
    }
}