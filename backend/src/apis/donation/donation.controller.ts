import {Request, Response} from 'express'

import {
    insertDonation,
    updateNumberOfMealsDonated,
    updateNumberOfMealsServed,
    selectDonationNumberOfMealsDonated,
    selectDonationNumberOfMealsServed
} from '../../utils/models/Donation'

import {Status} from '../../utils/interfaces/Status'
import {Restaurant} from "../../utils/models/Restaurant";


export async function getAllNumberOfMealsDonatedController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {donationRestaurantId} = request.params

        const postgresResult = await selectDonationNumberOfMealsDonated(donationRestaurantId)
        const data = postgresResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 500, data: [], message: ''}))
    }
}

export async function getAllNumberOfMealsServedController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {donationRestaurantId} = request.params

        const postgresResult = await selectDonationNumberOfMealsServed(donationRestaurantId)
        const data = postgresResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 500, data: [], message: ''}))
    }
}

export async function submitRestaurantDonation (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { donationNumberOfMealsDonated } = request.body
        const restaurant: Restaurant = request.session.restaurant as Restaurant
        const donationRestaurantId: string = restaurant.restaurantId as string

        const donation: Donation = {
            donationId: null,
            donationRestaurantId,
            donationNumberOfMealsDonated,
            donationDate: null
        }
        const result = await insertDonation(donation)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: 'Error submitting donation data. Please try again later.',
            data: null
        })
    }
}
