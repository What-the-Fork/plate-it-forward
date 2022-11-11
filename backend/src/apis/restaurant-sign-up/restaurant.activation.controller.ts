import { NextFunction, Request, Response } from 'express'
import { Restaurant, selectRestaurantByRestaurantActivationToken, updateRestaurant} from '../../utils/models/Restaurant'
import {Status} from "../../utils/interfaces/Status";

export async function restaurantActivationController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { activation } = request.params
        const restaurant = await selectRestaurantByRestaurantActivationToken(activation)
        console.log(restaurant)

        const activationFailed = (): Response => response.json({
            status: 400,
            data: null,
            message: 'Account activation has failed. Have you already activated this account?'})

        const activationSucceeded = async (restaurant: Restaurant): Promise<Response> => {
            const updatedRestaurant = { ...restaurant, restaurantActivationToken: null }
            console.log(updatedRestaurant)
            await updateRestaurant(updatedRestaurant)
            return response.json({
                status: 200,
                data: null,
                message: 'Account activation was successful!'})
        }

        return (restaurant !== null) ? await activationSucceeded(restaurant) : activationFailed()
    } catch (error: any) {
        console.log(error)
        return response.json({
            status: 500,
            data: null,
            message: 'error.message'})
    }
}
