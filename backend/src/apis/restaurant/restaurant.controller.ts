import { Request, Response } from 'express'
import {
    PartialRestaurant,
    Restaurant,
    selectPartialRestaurantByRestaurantId,
    selectRestaurantsByPartnershipCenterId,
    selectRestaurantsByPendingPartnershipCenterId,
    selectWholeRestaurantByRestaurantId,
    updateRestaurant
} from '../../utils/models/Restaurant'
import { Status } from '../../utils/interfaces/Status'

// Controller for UPDATE of Restaurant
export async function putRestaurantController (request: Request, response: Response): Promise<Response> {
    try {
        // grabbing entire restaurant by restaurant id parameters for body request
        const { restaurantId } = request.params
        const { restaurantAddress, restaurantContactEmail, restaurantContactName, restaurantContactPhone, restaurantName, restaurantNameUrl, restaurantProfileImgUrl } = request.body
        const restaurant = request.session.restaurant as Restaurant
        const restaurantIdFromSession = restaurant.restaurantId as string

        // this update establishes updated restaurants in restaurant table
        const performUpdate = async (partialRestaurant: PartialRestaurant): Promise<Response> => {
            const previousRestaurant: Restaurant = await selectWholeRestaurantByRestaurantId(partialRestaurant.restaurantId as string) as Restaurant
            const newRestaurant: Restaurant = { ...previousRestaurant, ...partialRestaurant }
            await updateRestaurant(newRestaurant)
            return response.json({ status: 200, data: null, message: 'Profile successful updated' })
        }
        // returns error if no restaurant exists
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
        // grabbing partial restaurant information for front end users
        const { restaurantId } = request.params
        const postgresResult = await selectPartialRestaurantByRestaurantId(restaurantId)
        const data = postgresResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message }))
    }
}

export async function getRestaurantsByPartnershipCenterId (request: Request, response: Response): Promise<Response> {
    try {
        const { partnershipCenterId } = request.params
        const postgresResult = await
            selectRestaurantsByPartnershipCenterId(partnershipCenterId)
        const data = postgresResult
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message }))
    }
}

export async function getRestaurantsByPendingPartnershipCenterId (request: Request, response: Response): Promise<Response> {
    try {
        const { partnershipCenterId } = request.params
        const postgresResult = await
            selectRestaurantsByPendingPartnershipCenterId(partnershipCenterId)
        const data = postgresResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message }))
    }
}