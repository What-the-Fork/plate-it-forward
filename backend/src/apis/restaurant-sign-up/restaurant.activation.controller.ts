import { NextFunction, Request, Response } from 'express'
import { Restaurant, selectRestaurantByRestaurantActivationToken, updateRestaurant} from '../../utils/models/Restaurant'
import {Status} from "../../utils/interfaces/Status";

export async function restaurantActivationController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        // activation link grabs activation token to either activate or confirm existing account
        const { activation } = request.params
        const restaurant = await selectRestaurantByRestaurantActivationToken(activation)

        const activationFailed = (): Response => response.json({
            status: 400,
            data: null,
            message: 'Account activation has failed. Have you already activated this account?'})

        const activationSucceeded = async (restaurant: Restaurant): Promise<Response> => {
            const updatedRestaurant = { ...restaurant, restaurantActivationToken: null }
            await updateRestaurant(updatedRestaurant)
            return response.json({
                status: 200,
                data: null,
                message: 'Account activation was successful!'})
        }

        return (restaurant !== null) ? await activationSucceeded(restaurant) : activationFailed()
    } catch (error: any) {
        return response.json({
            status: 500,
            data: null,
            message: 'error.message'})
    }
}
