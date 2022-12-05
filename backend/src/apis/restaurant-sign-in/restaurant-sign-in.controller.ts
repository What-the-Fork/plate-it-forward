import {Request, Response} from 'express'
import 'express-session'
import {v4 as uuid} from 'uuid'
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {Restaurant, selectRestaurantByRestaurantContactEmail} from "../../utils/models/Restaurant";

export async function restaurantSignInController(request: Request, response: Response): Promise<Response> {
    try {
        // request json must have contact email/password to sign in
        const {restaurantContactEmail, restaurantPassword} = request.body
        const restaurant: Restaurant | null = await selectRestaurantByRestaurantContactEmail(restaurantContactEmail)

        return (restaurant !== null) && await validatePassword(restaurant.restaurantHash, restaurantPassword)
            ? restaurantSignInSuccessful(request, response, restaurant)
            : restaurantSignInFailed(response)
    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}

function restaurantSignInFailed(response: Response): Response {
    return response.json({status: 400, message: 'Email or password is incorrect please try again.', data: null})
}

function restaurantSignInSuccessful(request: Request, response: Response, restaurant: Restaurant): Response {
    const {
        restaurantId,
        restaurantAddress,
        restaurantContactEmail,
        restaurantContactName,
        restaurantContactPhone,
        restaurantName,
        restaurantNameUrl,
        restaurantProfileImgUrl
    } = restaurant
    // signature validates sign in using uuid
    const signature: string = uuid()
    const authorization: string = generateJwt({
        restaurantId,
        restaurantAddress,
        restaurantContactEmail,
        restaurantContactName,
        restaurantContactPhone,
        restaurantName,
        restaurantNameUrl,
        restaurantProfileImgUrl
    }, signature)

    request.session.restaurant = restaurant
    request.session.jwt = authorization
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({status: 200, message: 'Sign in successful restaurant', data: null})

}