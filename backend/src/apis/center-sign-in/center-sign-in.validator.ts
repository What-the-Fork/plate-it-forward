import {Schema} from "express-validator";
// blueprint for center entity sign in
export const centerSignInValidator: Schema = {
    centerPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        // trim prevents empty characters for security
        trim: true,
        // escape - prevents smiley face of doom/ any malicious code being inserted
        escape: true
    },
    centerContactEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        //normalizeEmail: true,
        trim: true
    }
}