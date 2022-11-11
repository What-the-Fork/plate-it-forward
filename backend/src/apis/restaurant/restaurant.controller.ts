import { Request, Response } from 'express'
import {
    PartialRestaurant,
    Restaurant,
    selectPartialRestaurantByRestaurantId,
    selectWholeRestaurantByRestaurantId,
    updateRestaurant
} from '../../utils/models/Restaurant'
import { Status } from '../../utils/interfaces/Status'


export async function putRestaurantController (request: Request, response: Response): Promise<Response> {
    try {
        const { restaurantId } = request.params
        const { restaurantAddress, restaurantContactEmail, restaurantContactName, restaurantContactPhone, restaurantName, restaurantNameUrl, restaurantProfileImgUrl } = request.body
        const restaurant = request.session.restaurant as Restaurant
        const restaurantIdFromSession = restaurant.restaurantId as string

        const performUpdate = async (partialRestaurant: PartialRestaurant): Promise<Response> => {
            const previousRestaurant: Restaurant = await selectWholeRestaurantByRestaurantId(partialRestaurant.restaurantId as string) as Restaurant
            const newRestaurant: Restaurant = { ...previousRestaurant, ...partialRestaurant }
            await updateRestaurant(newRestaurant)
            return response.json({ status: 200, data: null, message: 'Profile successful updated' })
        }

        const updateFailed = (message: string): Response => {
            return response.json({ status: 400, data: null, message })
        }

        return restaurantId === restaurantIdFromSession
            ? await performUpdate({ restaurantId, restaurantAddress, restaurantContactEmail, restaurantContactName, restaurantContactPhone, restaurantName, restaurantNameUrl, restaurantProfileImgUrl })
            : updateFailed('You are not allowed to perform this action')
    } catch (error: any) {
        return response.json({ status: 400, data: null, message: error.message})
    }
}

export async function getRestaurantByRestaurantId (request: Request, response: Response): Promise<Response> {
    try {
        const { restaurantId } = request.params
        const postgresResult = await selectPartialRestaurantByRestaurantId(restaurantId)
        const data = postgresResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message }))
    }
}