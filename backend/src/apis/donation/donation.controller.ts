import {Request, Response} from 'express'

import {
    insertDonation,
    // ASK GEORGE SHOULD WE KEEP OR NAH?
    // updateNumberOfMealsDonated,
    // updateNumberOfMealsServed,
    selectDonationByDonationId,
    Donation
} from '../../utils/models/Donation'

import {Status} from '../../utils/interfaces/Status'
import {Restaurant} from "../../utils/models/Restaurant";
import {selectCenterByDonationRestaurantId} from "../../utils/models/Center";


export async function getAllNumberOfMealsDonatedController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {donationRestaurantId} = request.params

        const postgresResult = await selectDonationByDonationId(donationRestaurantId)
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
        if (request.session.restaurant === undefined) {
            throw new Error('you are not logged in')
        }
        const restaurant: Restaurant = request.session.restaurant
        const donationRestaurantId: string = restaurant.restaurantId as string

        const center = await selectCenterByDonationRestaurantId(donationRestaurantId)

        if (center?.centerId !== null) {
            throw new Error('unable to process donation no approved partnerships')
        }
        const donationCenterId = center.centerId


        const donation: Donation = {
            donationId: null,
            donationRestaurantId,
            donationCenterId,
            donationNumberOfMealsDonated,
            donationDate: null,
            donationServeDate: null,
            donationNumberOfMealsServed: null
        }
        const result = await insertDonation(donation)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error: any) {
        return response.json({
            status: 500,
            message: error.message,
            data: null
        })
    }
}
